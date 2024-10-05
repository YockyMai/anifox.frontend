import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { ForwardedRef, forwardRef } from 'react'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'

import { Loader } from '../loader'
import './button.css'
import { ButtonProps } from './button.interface'

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  (
    {
      children,
      size = UISizes.MD,
      color = UIColors.ORANGE,
      fullWidth,
      icon,
      rightIcon,
      variant = UIVariants.FILLED,
      radius = UISizes.MD,
      isLoading,
      className,
      ...other
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={clsx(
          'button',
          `button_${color}`,
          size && `button_${size}`,
          fullWidth && 'button_full-width',
          variant && `button_${variant}`,
          radius && `button_radius-${radius}`,
          className
        )}
        ref={ref}
        {...other}
      >
        <div className='button__content'>
          {icon && !isLoading && (
            <div className='button__content__icon button__content__icon_left'>
              {icon}
            </div>
          )}
          {isLoading && (
            <div className='button__content__icon button__content__icon_left'>
              <Loader color='light' size={UISizes.SM} />
            </div>
          )}
          <div className='whitespace-nowrap'>{children}</div>
          {rightIcon && (
            <div className='button__content__icon button__content__icon_right'>
              {rightIcon}
            </div>
          )}
        </div>
      </button>
    )
  }
)
