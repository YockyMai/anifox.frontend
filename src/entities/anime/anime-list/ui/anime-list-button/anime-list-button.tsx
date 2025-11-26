import { HoverCard } from '@anifox/ui'
import { useState } from 'react'

import { AuthModal } from '@/entities/auth/auth-modal'
import { $viewer, useIsAuth } from '@/entities/viewer'
import {
  AnimeDocument,
  AnimeListDocument,
  AnimeListStatus,
  useRemoveAnimeListEntryMutation,
  useSaveAnimeListEntryMutation
} from '@/graphql/generated/output'

import { AnimeListButtonProps } from './anime-list-button.interface'
import { TrackStatusOptions } from './track-status-options/track-status-options'
import { Trigger } from './trigger/trigger'

export const AnimeListButton = ({
  animeUrl,
  withoutTitle,
  openDelay,
  animeListEntry,
  onlyContent
}: AnimeListButtonProps) => {
  const isAuth = useIsAuth()

  const viewer = $viewer.selectors.viewer()

  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [processedTrackStatus, setProcessedTrackStatus] =
    useState<AnimeListStatus | null>(null)

  const [saveAnimeListEntry, { loading: saveAnimeListEntryLoading }] =
    useSaveAnimeListEntryMutation({
      onCompleted: () => {
        setProcessedTrackStatus(null)
      },
      refetchQueries: (result) => {
        const newStatus = result.data?.saveAnimeListEntry.status

        if (!viewer) {
          return []
        }

        return [
          {
            query: AnimeListDocument,
            variables: {
              status: newStatus,
              userId: viewer.id
            }
          },
          {
            query: AnimeListDocument,
            variables: {
              status: animeListEntry?.status,
              userId: viewer.id
            }
          }
        ]
      }
    })

  const [removeAnimeListEntry, { loading: removeAnimeListEntryLoading }] =
    useRemoveAnimeListEntryMutation({
      variables: { animeUrl },
      onCompleted: () => {
        setProcessedTrackStatus(null)
      },
      refetchQueries: () => {
        if (!viewer || !animeListEntry?.status) {
          return []
        }

        return [
          {
            query: AnimeListDocument,
            variables: { userId: viewer.id, status: animeListEntry.status }
          },
          {
            query: AnimeDocument,
            variables: {
              url: animeUrl,
              userId: viewer.id
            }
          }
        ]
      }
    })

  const onSaveAnimeListEntry = async (status: AnimeListStatus) => {
    setProcessedTrackStatus(status)
    if (isAuth) {
      saveAnimeListEntry({
        variables: {
          status,
          animeUrl
        }
      })
    } else {
      setProcessedTrackStatus(status)
      setAuthModalIsOpened(true)
    }
  }

  const onRemoveAnimeListEntry = () => {
    if (!animeListEntry?.status) {
      return
    }
    setProcessedTrackStatus(animeListEntry.status)
    removeAnimeListEntry()
  }

  return (
    <>
      {onlyContent ? (
        <TrackStatusOptions
          processedAnimeListStatus={processedTrackStatus}
          isLoading={removeAnimeListEntryLoading || saveAnimeListEntryLoading}
          saveAnimeListEntry={onSaveAnimeListEntry}
          removeAnimeListEntry={onRemoveAnimeListEntry}
          currentAnimeListStatus={animeListEntry?.status}
        />
      ) : (
        <HoverCard
          openDelay={openDelay}
          withoutArrow
          unstyled
          width={200}
          trigger={
            <div>
              <Trigger
                withoutTitle={withoutTitle}
                currentTrackStatus={animeListEntry?.status}
              />
            </div>
          }
        >
          <TrackStatusOptions
            processedAnimeListStatus={processedTrackStatus}
            isLoading={removeAnimeListEntryLoading || saveAnimeListEntryLoading}
            saveAnimeListEntry={onSaveAnimeListEntry}
            removeAnimeListEntry={onRemoveAnimeListEntry}
            currentAnimeListStatus={animeListEntry?.status}
          />
        </HoverCard>
      )}

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
        onAuthSuccess={() => {
          if (processedTrackStatus) {
            saveAnimeListEntry({
              variables: {
                status: processedTrackStatus,
                animeUrl
              }
            })
            setProcessedTrackStatus(null)
          }
        }}
      />
    </>
  )
}
