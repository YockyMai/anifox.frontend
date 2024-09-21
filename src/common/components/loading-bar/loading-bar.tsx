import { clsx } from 'clsx'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'

import './loading-bar.css'
import { LoadingBarProps } from './loading-bar.interface'

export const LoadingBar = ({
  color = UIColors.ORANGE,
  size = UISizes.XXL,
  animationDuration,
  width,
  className,
  style,
  radius = UISizes.SM,
  ...other
}: LoadingBarProps) => {
  return (
    <div
      className={clsx(
        'loading-bar',
        `loading-bar_radius-${radius}`,
        `loading-bar_${color}`,
        `loading-bar_${size}`,
        className
      )}
      style={{ width: width ?? '100%', ...style }}
      {...other}
    >
      <span
        style={{
          animationDuration: animationDuration
            ? `${animationDuration}s`
            : undefined
        }}
        className='loading-bar__slider'
      />
    </div>
  )
}
