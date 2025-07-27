import {
  IconSquareNumber1Filled,
  IconSquareNumber2Filled,
  IconSquareNumber3Filled,
  IconSquareNumber4Filled,
  IconSquareNumber5Filled,
  IconSquareNumber6Filled,
  IconSquareNumber7Filled
} from '@tabler/icons-react'

import { DayOfWeek } from '@/graphql/generated/output'

export const DayNumberIcon = ({ day }: { day: DayOfWeek }) => {
  const size = 26

  switch (day) {
    case DayOfWeek.MONDAY:
      return <IconSquareNumber1Filled size={size} />
    case DayOfWeek.TUESDAY:
      return <IconSquareNumber2Filled size={size} />
    case DayOfWeek.WEDNESDAY:
      return <IconSquareNumber3Filled size={size} />
    case DayOfWeek.THURSDAY:
      return <IconSquareNumber4Filled size={size} />
    case DayOfWeek.FRIDAY:
      return <IconSquareNumber5Filled size={size} />
    case DayOfWeek.SATURDAY:
      return <IconSquareNumber6Filled size={size} />
    case DayOfWeek.SUNDAY:
      return <IconSquareNumber7Filled size={size} />
  }
}
