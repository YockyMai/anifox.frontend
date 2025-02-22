import { Badge, Button, HoverCard, UnstyledButton } from '@anifox/ui'
import { IconStack2Filled } from '@tabler/icons-react'
import { useMemo, useState } from 'react'

import { AnimeTrackStatusIcon } from '@/common/components/anime-track-status-icon/anime-track-status-icon'
import { UIColors } from '@/common/types/ui-colors'
import { AuthModal } from '@/entities/auth/auth-modal'
import { useIsAuth } from '@/entities/viewer'
import {
  ANIME_TRACK_STATUSES,
  AnimeTrackStatuses,
  MAP_ANIME_TRACK_STATUS_LABEL
} from '@/services/api'
import { useAnimeStatusMutation } from '@/services/mutations'

import { AnimeListButtonProps } from './anime-list-button.interface'

export const AnimeListButton = ({
  animeUrl,
  withoutTitle,
  size = 28,
  openDelay,
  currentTrackedStatus,
  onlyContent
}: AnimeListButtonProps) => {
  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [status, setStatus] = useState<AnimeTrackStatuses | null>(null)

  const statusMutation = useAnimeStatusMutation()

  const isAuth = useIsAuth()

  const options = useMemo(
    () =>
      [
        {
          value: ANIME_TRACK_STATUSES.WATCHING,
          title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.WATCHING],
          icon: <AnimeTrackStatusIcon status={ANIME_TRACK_STATUSES.WATCHING} />
        },
        {
          value: ANIME_TRACK_STATUSES.PLAN_TO_WATCH,
          title:
            MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.PLAN_TO_WATCH],
          icon: (
            <AnimeTrackStatusIcon status={ANIME_TRACK_STATUSES.PLAN_TO_WATCH} />
          )
        },
        {
          value: ANIME_TRACK_STATUSES.COMPLETED,
          title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.COMPLETED],
          icon: <AnimeTrackStatusIcon status={ANIME_TRACK_STATUSES.COMPLETED} />
        },
        {
          value: ANIME_TRACK_STATUSES.ON_HOLD,
          title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.ON_HOLD],
          icon: <AnimeTrackStatusIcon status={ANIME_TRACK_STATUSES.ON_HOLD} />
        },
        {
          value: ANIME_TRACK_STATUSES.DROPPED,
          title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.DROPPED],
          icon: <AnimeTrackStatusIcon status={ANIME_TRACK_STATUSES.DROPPED} />
        }
      ].filter(({ value }) => value !== currentTrackedStatus),
    [currentTrackedStatus]
  )

  const addAnimeToList = (status: AnimeTrackStatuses) => {
    if (isAuth) {
      statusMutation.mutate({ animeUrl, status })
    } else {
      setStatus(status)
      setAuthModalIsOpened(true)
    }
  }

  const trigger = useMemo(() => {
    if (withoutTitle) {
      return (
        <Button
          color={UIColors.ORANGE}
          style={{ height: size, width: size }}
          className='flex items-center justify-center p-3'
        >
          <IconStack2Filled />
        </Button>
      )
    }

    return (
      <Badge className='flex h-full items-center gap-1 rounded bg-orange-300 px-2 text-orange-50'>
        <p className='text-sm'>Добавить в список</p>
        <IconStack2Filled />
      </Badge>
    )
  }, [size, withoutTitle])

  return (
    <>
      {onlyContent ? (
        <div className='overflow-hidden rounded bg-slate-200 dark:bg-slate-800'>
          {options.map((option) => (
            <UnstyledButton
              key={option.value}
              onClick={() => addAnimeToList(option.value)}
              className='flex w-full items-center justify-start gap-2 px-2 py-2 text-sm transition-colors hover:bg-slate-300 hover:dark:bg-slate-700 dark:hover:text-white'
            >
              {option.icon}
              {option.title}
            </UnstyledButton>
          ))}
        </div>
      ) : (
        <HoverCard
          openDelay={openDelay}
          withoutArrow
          unstyled
          width={180}
          trigger={trigger}
        >
          <div className='overflow-hidden rounded bg-slate-200 shadow dark:bg-slate-800'>
            {options.map((option) => (
              <UnstyledButton
                key={option.value}
                onClick={() => addAnimeToList(option.value)}
                className='flex w-full items-center justify-start gap-2 px-2 py-2 text-sm transition-colors hover:bg-slate-300 hover:dark:bg-slate-700 dark:hover:text-white'
              >
                {option.icon}
                {option.title}
              </UnstyledButton>
            ))}
          </div>
        </HoverCard>
      )}

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
        onAuthSuccess={() => {
          if (status) {
            statusMutation.mutate({ animeUrl, status })
            setStatus(null)
          }
        }}
      />
    </>
  )
}
