import { ANIME_SCHEDULE_DAY, AnimeScheduleDay } from '@/services/api'

export const checkIsWeekday = (day: AnimeScheduleDay) =>
  day !== ANIME_SCHEDULE_DAY.SUNDAY && day !== ANIME_SCHEDULE_DAY.SATURDAY
