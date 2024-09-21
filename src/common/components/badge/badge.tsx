import { clsx } from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'

import './badge.css'
import { BadgeProps } from './badge.interface'

export const Badge = forwardRef(
  (
    {
      children,
      className,
      variant = UIVariants.FILLED,
      color = UIColors.ORANGE,
      size = UISizes.SM,
      radius = UISizes.MD,
      ...other
    }: BadgeProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'badge',
          radius && `badge_radius-${radius}`,
          color && `badge_${color}`,
          variant && `badge_${variant}`,
          size && `badge_${size}`,
          className
        )}
        {...other}
      >
        {children}
      </div>
    )
  }
)
