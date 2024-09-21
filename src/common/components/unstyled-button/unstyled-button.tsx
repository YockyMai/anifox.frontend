import { clsx } from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import './unstyled-button.css'
import { UnstyledButtonProps } from './unstyled-button.interface'

export const UnstyledButton = forwardRef(
  (
    { children, className, ...other }: UnstyledButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        {...other}
        className={clsx('unstyled-button', className && className)}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)
