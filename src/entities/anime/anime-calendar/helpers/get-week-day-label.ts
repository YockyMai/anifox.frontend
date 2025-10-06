import { DayOfWeek } from '@/graphql/generated/output'

export const getWeekDayLabel = (weekday: DayOfWeek) => {
  switch (weekday) {
    case DayOfWeek.MONDAY:
      return 'Понедельник'
    case DayOfWeek.TUESDAY:
      return 'Вторник'
    case DayOfWeek.WEDNESDAY:
      return 'Среда'
    case DayOfWeek.THURSDAY:
      return 'Четверг'
    case DayOfWeek.FRIDAY:
      return 'Пятница'
    case DayOfWeek.SATURDAY:
      return 'Суббота'
    case DayOfWeek.SUNDAY:
      return 'Воскресенье'
  }
}
