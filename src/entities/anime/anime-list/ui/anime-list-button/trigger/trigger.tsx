import { Badge, Button, UIColors } from '@anifox/ui'
import { IconStack2Filled } from '@tabler/icons-react'

import { AnimeTrackStatusIcon } from '@/common/components/anime-track-status-icon/anime-track-status-icon'
import { MAP_ANIME_LIST_STATUS_LABEL } from '@/services/api'

import { TriggerProps } from './trigger.interface'

export const Trigger = ({ withoutTitle, currentTrackStatus }: TriggerProps) => {
  if (withoutTitle) {
    const size = 28

    return (
      <Button
        color={UIColors.ORANGE}
        style={{ height: size, width: size }}
        className='flex items-center justify-center p-3'
      >
        {currentTrackStatus ? (
          <AnimeTrackStatusIcon size={24} status={currentTrackStatus} />
        ) : (
          <IconStack2Filled />
        )}
      </Button>
    )
  }

  return (
    <Badge className='flex h-full items-center justify-center gap-x-2 rounded bg-orange-300 px-2 text-orange-50'>
      <p className='text-sm'>
        {currentTrackStatus
          ? MAP_ANIME_LIST_STATUS_LABEL[currentTrackStatus]
          : 'Добавить в список'}
      </p>
      {currentTrackStatus ? (
        <AnimeTrackStatusIcon status={currentTrackStatus} />
      ) : (
        <IconStack2Filled />
      )}
    </Badge>
  )
}
