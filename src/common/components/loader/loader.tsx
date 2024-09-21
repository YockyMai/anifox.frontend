import { IconLoader2 } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'

import { LOADER_SIZE } from './loader.const'
import './loader.css'
import { LoaderProps } from './loader.interface'

export const Loader = forwardRef(
  (
    {
      size = UISizes.MD,
      color = UIColors.ORANGE,
      className,
      custom,
      ...other
    }: LoaderProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        {...other}
        ref={ref}
        className={clsx('loader', `loader_${color}`, className)}
      >
        {custom ?? <IconLoader2 size={LOADER_SIZE[size]} />}
      </div>
    )
  }
)
