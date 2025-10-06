import { Loader, UnstyledButton } from '@anifox/ui'
import { IconCheck } from '@tabler/icons-react'
import clsx from 'clsx'
import { useMemo } from 'react'

import { AnimeTrackStatusIcon } from '@/common/components/anime-track-status-icon/anime-track-status-icon'
import { MAP_ANIME_LIST_STATUS_LABEL } from '@/common/const/translate'
import { AnimeListStatus } from '@/graphql/generated/output'

import { TrackStatusOptionsProps } from './track-status-options.interface'

export const TrackStatusOptions = ({
  currentAnimeListStatus,
  saveAnimeListEntry,
  removeAnimeListEntry,
  isLoading,
  processedAnimeListStatus
}: TrackStatusOptionsProps) => {
  const options = useMemo(
    () => [
      {
        value: AnimeListStatus.WATCHING,
        title: MAP_ANIME_LIST_STATUS_LABEL[AnimeListStatus.WATCHING],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.WATCHING} />
      },
      {
        value: AnimeListStatus.PLAN_TO_WATCH,
        title: MAP_ANIME_LIST_STATUS_LABEL[AnimeListStatus.PLAN_TO_WATCH],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.PLAN_TO_WATCH} />
      },
      {
        value: AnimeListStatus.COMPLETED,
        title: MAP_ANIME_LIST_STATUS_LABEL[AnimeListStatus.COMPLETED],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.COMPLETED} />
      },
      {
        value: AnimeListStatus.ON_HOLD,
        title: MAP_ANIME_LIST_STATUS_LABEL[AnimeListStatus.ON_HOLD],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.ON_HOLD} />
      },
      {
        value: AnimeListStatus.DROPPED,
        title: MAP_ANIME_LIST_STATUS_LABEL[AnimeListStatus.DROPPED],
        icon: <AnimeTrackStatusIcon status={AnimeListStatus.DROPPED} />
      }
    ],
    []
  )

  return (
    <>
      <div className='w-[200px] overflow-hidden rounded bg-slate-200 shadow dark:bg-slate-800'>
        {options.map((option) => (
          <UnstyledButton
            key={option.value}
            onClick={() => {
              if (currentAnimeListStatus === option.value) {
                removeAnimeListEntry(option.value)
              } else {
                saveAnimeListEntry(option.value)
              }
            }}
            className={clsx(
              'flex w-full items-center justify-between gap-x-2 px-2 py-2 text-sm transition-colors hover:bg-slate-300 hover:dark:bg-slate-700 dark:hover:text-white',
              currentAnimeListStatus === option.value &&
                'bg-slate-300 dark:bg-slate-900 dark:text-white'
            )}
          >
            <div className='flex items-center gap-x-2'>
              <div>
                {processedAnimeListStatus === option.value && isLoading ? (
                  <Loader size='sm' />
                ) : (
                  option.icon
                )}
              </div>
              {option.title}
            </div>

            {currentAnimeListStatus === option.value && <IconCheck />}
          </UnstyledButton>
        ))}
      </div>
    </>
  )
}
