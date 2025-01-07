import { ANIME_SCHEDULE_DAY, AnimeScheduleDay } from '@/services/api'

export const getWeekDayLabel = (weekday: AnimeScheduleDay) => {
  switch (weekday) {
    case ANIME_SCHEDULE_DAY.MONDAY:
      return 'Понедельник'
    case ANIME_SCHEDULE_DAY.TUESDAY:
      return 'Вторник'
    case ANIME_SCHEDULE_DAY.WEDNESDAY:
      return 'Среда'
    case ANIME_SCHEDULE_DAY.THURSDAY:
      return 'Четверг'
    case ANIME_SCHEDULE_DAY.FRIDAY:
      return 'Пятница'
    case ANIME_SCHEDULE_DAY.SATURDAY:
      return 'Суббота'
    case ANIME_SCHEDULE_DAY.SUNDAY:
      return 'Воскресенье'
  }
}
