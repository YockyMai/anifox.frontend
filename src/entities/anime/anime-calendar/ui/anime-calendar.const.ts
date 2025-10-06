import { DayOfWeek } from '@/graphql/generated/output'

export const ORDERED_DAYS: Array<keyof typeof DayOfWeek> = [
  DayOfWeek.MONDAY,
  DayOfWeek.TUESDAY,
  DayOfWeek.WEDNESDAY,
  DayOfWeek.THURSDAY,
  DayOfWeek.FRIDAY,
  DayOfWeek.SATURDAY,
  DayOfWeek.SUNDAY
]
