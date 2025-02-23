import { UnstyledButton } from '@anifox/ui'
import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import { useMemo } from 'react'

import { AnimeTrackStatusIcon } from '@/common/components/anime-track-status-icon/anime-track-status-icon'
import {
  ANIME_TRACK_STATUSES,
  MAP_ANIME_TRACK_STATUS_LABEL
} from '@/services/api'

import { TrackStatusOptionsProps } from './track-status-options.interface'

export const TrackStatusOptions = ({
  currentTrackStatus,
  addAnimeToTrackedList,
  deleteAnimeFromTrackedList
}: TrackStatusOptionsProps) => {
  const options = useMemo(
    () => [
      {
        value: ANIME_TRACK_STATUSES.WATCHING,
        title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.WATCHING],
        icon: <AnimeTrackStatusIcon status={ANIME_TRACK_STATUSES.WATCHING} />
      },
      {
        value: ANIME_TRACK_STATUSES.PLAN_TO_WATCH,
        title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.PLAN_TO_WATCH],
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
    ],
    []
  )

  return (
    <>
      <div className='overflow-hidden rounded bg-slate-200 shadow dark:bg-slate-800'>
        {options.map((option) => (
          <UnstyledButton
            key={option.value}
            onClick={() => {
              if (currentTrackStatus === option.value) {
                deleteAnimeFromTrackedList(option.value)
              } else {
                addAnimeToTrackedList(option.value)
              }
            }}
            className={clsx(
              'flex w-full items-center justify-between gap-x-2 px-2 py-2 text-sm transition-colors hover:bg-slate-300 hover:dark:bg-slate-700 dark:hover:text-white',
              currentTrackStatus === option.value &&
                'bg-slate-300 dark:bg-slate-900 dark:text-white'
            )}
          >
            <div className='flex items-center gap-x-2'>
              {option.icon}
              {option.title}
            </div>

            {currentTrackStatus === option.value && <IconCheck />}
          </UnstyledButton>
        ))}
      </div>
    </>
  )
}
