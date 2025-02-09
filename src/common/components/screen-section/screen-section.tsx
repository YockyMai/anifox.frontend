import clsx from 'clsx'

import './screen-section.css'
import { ScreenSectionProps } from './screen-section.interface'

export const ScreenSection = ({
  title,
  children,
  description,
  withContainer
}: ScreenSectionProps) => {
  return (
    <div
      className={clsx('screen-section', withContainer && 'container mx-auto')}
    >
      {(title || description) && (
        <div className='mb-1'>
          {title && <p className='screen-section__title'>{title}</p>}
          {description && <p className='text-slate-500'>{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}
