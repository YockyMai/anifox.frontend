import clsx from 'clsx'
import React from 'react'

import {
  getTotalStatisticsColor,
  getTotalStatisticsTitle
} from '@/entities/user/helpers'

import { UserStatProps } from './user-stat.interface'

export const UserStat = ({ variant, value }: UserStatProps) => {
  const color = getTotalStatisticsColor(variant)
  const title = getTotalStatisticsTitle(variant)

  return (
    <div>
      <div className='flex h-8 items-center justify-center'>
        <p className='text-center text-xs'>{title}</p>
      </div>
      <p className={clsx('mt-1.5 text-center text-xl font-bold', color.text)}>
        {value}
      </p>
    </div>
  )
}
