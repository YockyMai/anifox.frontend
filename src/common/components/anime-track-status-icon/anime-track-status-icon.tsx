import {
  IconCheck,
  IconClockPlus,
  IconDeviceTvOld,
  IconTrash,
  IconZzz
} from '@tabler/icons-react'

import { AnimeListStatus } from '@/graphql/generated/output'

import { AnimeTrackStatusIconProps } from './anime-track-status-icon.interface'

export const AnimeTrackStatusIcon = ({
  status,
  size = 22
}: AnimeTrackStatusIconProps) => {
  switch (status) {
    case AnimeListStatus.WATCHING: {
      return <IconDeviceTvOld size={size} />
    }

    case AnimeListStatus.PLAN_TO_WATCH: {
      return <IconClockPlus size={size} />
    }

    case AnimeListStatus.COMPLETED: {
      return <IconCheck size={size} />
    }

    case AnimeListStatus.ON_HOLD: {
      return <IconZzz size={size} />
    }

    case AnimeListStatus.DROPPED: {
      return <IconTrash size={size} />
    }
  }
}
