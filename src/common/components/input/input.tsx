import { clsx } from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'

import './input.css'
import { InputProps } from './input.interface'

export const Input = forwardRef(
  (
    {
      icon,
      rightIcon,
      label,
      type,
      size = UISizes.MD,
      disabled,
      error,
      variant = UIVariants.FILLED,
      ...other
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={clsx(
          'input',
          size && `input_${size}`,
          disabled && 'input_disabled',
          variant && `input_${variant}`
        )}
      >
        {label && <label className='input__label'>{label}</label>}
        <div
          className={clsx(
            'input__element',
            icon && 'input__element_left-icon',
            rightIcon && 'input__element_right-icon'
          )}
        >
          {icon && <span className='input__icon input__icon_left'>{icon}</span>}
          <input
            disabled={disabled}
            ref={ref}
            type={type ? type : 'text'}
            {...other}
          />
          {rightIcon && (
            <span className='input__icon input__icon_right'>{rightIcon}</span>
          )}
        </div>
        {error && <p className='input__error'>{error}</p>}
      </div>
    )
  }
)
