import {
  IconCheck,
  IconClockPlus,
  IconDeviceTvOld,
  IconTrash,
  IconZzz
} from '@tabler/icons-react'
import React from 'react'

import { ANIME_TRACK_STATUSES } from '@/services/api'

import { AnimeTrackStatusIconProps } from './anime-track-status-icon.interface'

export const AnimeTrackStatusIcon = ({
  status,
  size = 22
}: AnimeTrackStatusIconProps) => {
  switch (status) {
    case ANIME_TRACK_STATUSES.WATCHING: {
      return <IconDeviceTvOld size={size} />
    }

    case ANIME_TRACK_STATUSES.PLAN_TO_WATCH: {
      return <IconClockPlus size={size} />
    }

    case ANIME_TRACK_STATUSES.COMPLETED: {
      return <IconCheck size={size} />
    }

    case ANIME_TRACK_STATUSES.ON_HOLD: {
      return <IconZzz size={size} />
    }

    case ANIME_TRACK_STATUSES.DROPPED: {
      return <IconTrash size={size} />
    }
  }
}
