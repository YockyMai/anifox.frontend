import React from 'react'

import './screen-section.css'
import { ScreenSectionProps } from './screen-section.interface'

export const ScreenSection = ({ title, children }: ScreenSectionProps) => {
  return (
    <div className='screen-section'>
      <p className='screen-section__title'>{title}</p>
      {children}
    </div>
  )
}
