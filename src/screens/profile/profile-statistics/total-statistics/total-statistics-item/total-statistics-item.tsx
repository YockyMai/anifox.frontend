import { Badge } from '@anifox/ui'

import {
  getTotalStatisticsColor,
  getTotalStatisticsTitle
} from '@/entities/user'

import { TotalStatisticsItemProps } from './total-statistics-item.interface'

export const TotalStatisticsItem = ({
  value,
  variant
}: TotalStatisticsItemProps) => {
  const color = getTotalStatisticsColor(variant)
  const title = getTotalStatisticsTitle(variant)

  return (
    <div className='flex flex-col items-center justify-center gap-y-2'>
      <div
        className={`relative flex h-16 w-16 items-center justify-center rounded-full ${color.bg}`}
      >
        <div
          className={`absolute h-20 w-20 ${color.bg} -z-10 animate-pulse rounded-full opacity-35`}
        />
        <p className='text-lg font-bold text-white'>{value}</p>
      </div>
      <Badge color={color.const} className='mt-2'>
        {title}
      </Badge>
    </div>
  )
}
