import { DayOfWeek } from '@/graphql/generated/output'

export type AnimeCalendarTriggerProps = {
  isWeekday: boolean
  day: DayOfWeek
}
