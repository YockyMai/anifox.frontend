import {
  IconSquareNumber1Filled,
  IconSquareNumber2Filled,
  IconSquareNumber3Filled,
  IconSquareNumber4Filled,
  IconSquareNumber5Filled,
  IconSquareNumber6Filled,
  IconSquareNumber7Filled
} from '@tabler/icons-react'

import { ANIME_SCHEDULE_DAY, AnimeScheduleDay } from '@/services/api'

export const DayNumberIcon = ({ day }: { day: AnimeScheduleDay }) => {
  const size = 26

  switch (day) {
    case ANIME_SCHEDULE_DAY.MONDAY:
      return <IconSquareNumber1Filled size={size} />
    case ANIME_SCHEDULE_DAY.TUESDAY:
      return <IconSquareNumber2Filled size={size} />
    case ANIME_SCHEDULE_DAY.WEDNESDAY:
      return <IconSquareNumber3Filled size={size} />
    case ANIME_SCHEDULE_DAY.THURSDAY:
      return <IconSquareNumber4Filled size={size} />
    case ANIME_SCHEDULE_DAY.FRIDAY:
      return <IconSquareNumber5Filled size={size} />
    case ANIME_SCHEDULE_DAY.SATURDAY:
      return <IconSquareNumber6Filled size={size} />
    case ANIME_SCHEDULE_DAY.SUNDAY:
      return <IconSquareNumber7Filled size={size} />
  }
}
