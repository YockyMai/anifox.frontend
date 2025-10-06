import { DayOfWeek } from '@/graphql/generated/output'

export const checkIsWeekday = (day: DayOfWeek) =>
  day !== DayOfWeek.SUNDAY && day !== DayOfWeek.SATURDAY
