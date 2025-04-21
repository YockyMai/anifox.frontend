import { UnstyledButton } from '@anifox/ui'
import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import { useMemo } from 'react'

import { AnimeTrackStatusIcon } from '@/common/components/anime-track-status-icon/anime-track-status-icon'
import { AnimeListStatus } from '@/graphql/generated/output'
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
        value: AnimeListStatus.WATCHING,
        title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.WATCHING],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.WATCHING} />
      },
      {
        value: AnimeListStatus.PLAN_TO_WATCH,
        title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.PLAN_TO_WATCH],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.PLAN_TO_WATCH} />
      },
      {
        value: AnimeListStatus.COMPLETED,
        title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.COMPLETED],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.COMPLETED} />
      },
      {
        value: AnimeListStatus.ON_HOLD,
        title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.ON_HOLD],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.ON_HOLD} />
      },
      {
        value: AnimeListStatus.DROPPED,
        title: MAP_ANIME_TRACK_STATUS_LABEL[ANIME_TRACK_STATUSES.DROPPED],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.DROPPED} />
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
