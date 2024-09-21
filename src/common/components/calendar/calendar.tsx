import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight
} from '@tabler/icons-react'
import { forwardRef } from 'react'
import { Calendar as ReactCalendar } from 'react-calendar'

import './calendar.css'
import { CalendarProps } from './calendar.interface'

export const Calendar = forwardRef((props: CalendarProps, ref) => {
  return (
    <ReactCalendar
      {...props}
      ref={ref}
      prev2Label={<IconChevronsLeft />}
      next2Label={<IconChevronsRight />}
      nextLabel={<IconChevronRight size={24} />}
      prevLabel={<IconChevronLeft size={24} />}
    />
  )
})
