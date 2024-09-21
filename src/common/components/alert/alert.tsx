import { IconX } from '@tabler/icons-react'
import { clsx } from 'clsx'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'

import { UnstyledButton } from '../unstyled-button'
import './alert.css'
import { AlertProps } from './alert.interface'

export const Alert = ({
  title,
  icon,
  withCloseButton,
  children,
  variant = UIVariants.FILLED,
  color = UIColors.ORANGE,
  radius = UISizes.MD,
  className,
  ...other
}: AlertProps) => {
  return (
    <div
      className={clsx(
        'alert',
        variant && `alert_${variant}`,
        color && `alert_${color}`,
        radius && `alert_radius-${radius}`,
        className
      )}
      {...other}
    >
      <div className='alert__icon'>{icon}</div>
      <div>
        <div className='alert__title'>{title}</div>
        <div className='alert__content'>{children}</div>
      </div>

      {withCloseButton && (
        <div>
          <UnstyledButton className='alert__close-icon'>
            <IconX size={18} />
          </UnstyledButton>
        </div>
      )}
    </div>
  )
}
