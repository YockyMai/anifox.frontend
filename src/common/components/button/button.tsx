import { clsx } from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import { useRippleEffect } from '@/common/hooks'
import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'

import './button.css'
import { ButtonProps } from './button.interface'

export const Button = forwardRef(
  (
    {
      children,
      size = UISizes.MD,
      withRipple,
      color = UIColors.ORANGE,
      fullWidth,
      icon,
      rightIcon,
      variant = UIVariants.FILLED,
      radius = UISizes.MD,
      className,
      ...other
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { addRipple, rippleArray, setRippleArray, rippleDuration } =
      useRippleEffect()

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
        onMouseDown={
          withRipple
            ? (event) => addRipple(event, rippleArray, setRippleArray)
            : undefined
        }
        ref={ref}
        {...other}
      >
        <div className='button__content'>
          {icon && (
            <div className='button__content__icon button__content__icon_left'>
              {icon}
            </div>
          )}
          {children}
          {rightIcon && (
            <div className='button__content__icon button__content__icon_right'>
              {rightIcon}
            </div>
          )}
        </div>
        <div className={clsx(withRipple && 'button__ripple')}>
          {rippleArray.length > 0 &&
            rippleArray.map((ripple) => (
              <span
                style={{
                  animationDuration: `${rippleDuration}ms`,
                  top: ripple.y,
                  left: ripple.x,
                  width: ripple.size,
                  height: ripple.size
                }}
              />
            ))}
        </div>
      </button>
    )
  }
)
