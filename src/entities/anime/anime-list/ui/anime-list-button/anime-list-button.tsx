import { HoverCard } from '@anifox/ui'
import { useState } from 'react'

import { AuthModal } from '@/entities/auth/auth-modal'
import { $viewer, useIsAuth } from '@/entities/viewer'
import {
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
  currentTrackStatus,
  onlyContent
}: AnimeListButtonProps) => {
  const isAuth = useIsAuth()

  const viewer = $viewer.selectors.viewer()
  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [trackStatusInProgress, setTrackStatusInProgress] =
    useState<AnimeListStatus | null>(null)

  const [saveAnimeListEntry, { loading: saveAnimeListEntryLoading }] =
    useSaveAnimeListEntryMutation({
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
              status: currentTrackStatus,
              userId: viewer.id
            }
          }
        ]
      }
    })

  const [removeAnimeListEntry, { loading: removeAnimeListEntryLoading }] =
    useRemoveAnimeListEntryMutation({
      variables: { animeUrl },
      refetchQueries: () => {
        if (!viewer) {
          return []
        }

        return [
          {
            query: AnimeListDocument,
            variables: { userId: viewer.id, status: currentTrackStatus }
          }
        ]
      }
    })

  const addAnimeTrackedList = async (status: AnimeListStatus) => {
    if (isAuth) {
      saveAnimeListEntry({
        variables: {
          status,
          animeUrl
        }
      })
    } else {
      setTrackStatusInProgress(status)
      setAuthModalIsOpened(true)
    }
  }

  return (
    <>
      {onlyContent ? (
        <TrackStatusOptions
          addAnimeToTrackedList={addAnimeTrackedList}
          deleteAnimeFromTrackedList={removeAnimeListEntry}
          currentTrackStatus={currentTrackStatus}
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
                currentTrackStatus={currentTrackStatus}
              />
            </div>
          }
        >
          <TrackStatusOptions
            addAnimeToTrackedList={addAnimeTrackedList}
            deleteAnimeFromTrackedList={removeAnimeListEntry}
            currentTrackStatus={currentTrackStatus}
          />
        </HoverCard>
      )}

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
        onAuthSuccess={() => {
          if (trackStatusInProgress) {
            saveAnimeListEntry({
              variables: {
                status: trackStatusInProgress,
                animeUrl
              }
            })
            setTrackStatusInProgress(null)
          }
        }}
      />
    </>
  )
}
