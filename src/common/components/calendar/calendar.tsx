import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight
} from '@tabler/icons-react'
import { ForwardedRef, forwardRef } from 'react'
import { Calendar as ReactCalendar } from 'react-calendar'

import './calendar.css'
import { CalendarProps } from './calendar.interface'

const Calendar = (props: CalendarProps, ref: ForwardedRef<HTMLDivElement>) => {
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
}

export default forwardRef(Calendar)
