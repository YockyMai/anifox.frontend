import { HoverCard } from '@anifox/ui'
import { useState } from 'react'

import { AuthModal } from '@/entities/auth/auth-modal'
import { useIsAuth } from '@/entities/viewer'
import {
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

  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [trackStatusInProgress, setTrackStatusInProgress] =
    useState<AnimeListStatus | null>(null)

  const [saveAnimeListEntry] = useSaveAnimeListEntryMutation()
  const [removeAnimeListEntry] = useRemoveAnimeListEntryMutation({
    variables: { animeUrl }
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
