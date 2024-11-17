import { ANIME_SCHEDULE_DAY } from '@/services/api'

export const getCurrentDayOfWeek = () => {
  const date = new Date()

  switch (date.getDay()) {
    case 1:
      return ANIME_SCHEDULE_DAY.MONDAY
    case 2:
      return ANIME_SCHEDULE_DAY.TUESDAY
    case 3:
      return ANIME_SCHEDULE_DAY.WEDNESDAY
    case 4:
      return ANIME_SCHEDULE_DAY.THURSDAY
    case 5:
      return ANIME_SCHEDULE_DAY.FRIDAY
    case 6:
      return ANIME_SCHEDULE_DAY.SATURDAY
    default:
      return ANIME_SCHEDULE_DAY.SUNDAY
  }
}
