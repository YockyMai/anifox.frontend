import { Badge, UIColors } from '@anifox/ui'
import { IconX } from '@tabler/icons-react'
import React, { useMemo } from 'react'

import { TotalStatisticsItemProps } from './total-statistics-item.interface'

export const TotalStatisticsItem = ({
  title,
  value,
  color
}: TotalStatisticsItemProps) => {
  const roundColor = useMemo(() => {
    if (color === UIColors.GREEN) {
      return 'bg-green-500'
    }
    if (color === UIColors.ORANGE) {
      return 'bg-orange-300'
    }
    if (color === UIColors.RED) {
      return 'bg-red-400'
    }

    return 'bg-purple-400'
  }, [color])

  return (
    <div className='flex flex-col items-center justify-center gap-y-2'>
      <div
        className={`relative flex h-16 w-16 items-center justify-center rounded-full ${roundColor}`}
      >
        <div
          className={`absolute h-20 w-20 ${roundColor} -z-10 animate-pulse rounded-full opacity-35`}
        />
        <p className='text-lg font-bold text-white'>{value}</p>
      </div>
      <Badge color={color} className='mt-2'>
        {title}
      </Badge>
    </div>
  )
}
