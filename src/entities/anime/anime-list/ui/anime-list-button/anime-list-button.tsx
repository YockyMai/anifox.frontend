import { Badge, HoverCard, UnstyledButton } from '@anifox/ui'
import { useState } from 'react'

import { AuthModal } from '@/entities/auth/auth-modal'
import { useIsAuth } from '@/entities/viewer'
import { AnimeTrackStatuses } from '@/services/api'
import {
  useAnimeStatusMutation,
  useDeleteTrackedAnimeMutation
} from '@/services/mutations'

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
    useState<AnimeTrackStatuses | null>(null)

  const trackedAnimeMutation = useAnimeStatusMutation()
  const deleteTrackedAnimeMutation = useDeleteTrackedAnimeMutation()

  const addAnimeTrackedList = async (status: AnimeTrackStatuses) => {
    if (isAuth) {
      trackedAnimeMutation.mutate({ animeUrl, status })
    } else {
      setTrackStatusInProgress(status)
      setAuthModalIsOpened(true)
    }
  }

  const deleteAnimeFromTrackedList = () => {
    deleteTrackedAnimeMutation.mutate(animeUrl)
  }

  return (
    <>
      {onlyContent ? (
        <TrackStatusOptions
          addAnimeToTrackedList={addAnimeTrackedList}
          deleteAnimeFromTrackedList={deleteAnimeFromTrackedList}
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
            deleteAnimeFromTrackedList={deleteAnimeFromTrackedList}
            currentTrackStatus={currentTrackStatus}
          />
        </HoverCard>
      )}

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
        onAuthSuccess={() => {
          if (trackStatusInProgress) {
            trackedAnimeMutation.mutate({
              animeUrl,
              status: trackStatusInProgress
            })
            setTrackStatusInProgress(null)
          }
        }}
      />
    </>
  )
}
