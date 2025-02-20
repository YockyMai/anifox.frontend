import { Tooltip, UnstyledButton } from '@anifox/ui'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import React from 'react'

import { AnimeTrackStatusIcon } from '@/common/components/anime-track-status-icon/anime-track-status-icon'
import { $animeList } from '@/entities/profile'
import { MAP_ANIME_TRACK_STATUS_LABEL } from '@/services/api'

import { AnimeListTableHeaderProps } from './anime-list-table-header.interface'

export const AnimeListTableHeader = ({
  status,
  withReorder
}: AnimeListTableHeaderProps) => {
  const statuses = $animeList.selectors.rows()

  const isFirstStatus = statuses[0] === status
  const isLastStatus = statuses[statuses.length - 1] === status

  return (
    <div className='flex h-16 items-center justify-between p-3'>
      <div className='flex items-center gap-x-3'>
        <AnimeTrackStatusIcon size={28} status={status} />
        <p className='text-xl font-bold'>
          {MAP_ANIME_TRACK_STATUS_LABEL[status]}
        </p>
      </div>

      {withReorder && (
        <div className='flex flex-col'>
          {!isFirstStatus && (
            <Tooltip label='Переместить выше' position='top'>
              <UnstyledButton
                onClick={() => $animeList.actions.moveRowTop(status)}
              >
                <IconChevronUp className='transition-colors hover:stroke-orange-400' />
              </UnstyledButton>
            </Tooltip>
          )}

          {!isLastStatus && (
            <Tooltip label='Переместить ниже' position='bottom'>
              <UnstyledButton
                onClick={() => $animeList.actions.moveRowBottom(status)}
              >
                <IconChevronDown className='transition-colors hover:stroke-orange-400' />
              </UnstyledButton>
            </Tooltip>
          )}
        </div>
      )}
    </div>
  )
}
