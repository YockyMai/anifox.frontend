'use client'

import { useHover } from '@anifox/hooks'
import {
  Badge,
  UIColors,
  UISizes,
  UnstyledButton,
  Transition
} from '@anifox/ui'
import clsx from 'clsx'
import { useState } from 'react'

import './anime-panel-description.css'
import { AnimePanelDescriptionProps } from './anime-panel-description.interface'

export const AnimePanelDescription = ({
  description
}: AnimePanelDescriptionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const { hoverProps, isHovered } = useHover()

  return (
    <div {...hoverProps} className='anime-panel-description'>
      <p className='anime-panel-description__title'>Описание</p>

      <div
        className={clsx(
          'anime-panel-description__content',
          isCollapsed && 'anime-panel-description__content_collapsed'
        )}
      >
        <p className='anime-panel-description__text'>{description}</p>
        <Transition duration={UISizes.SM} mounded={isHovered || !isCollapsed}>
          <UnstyledButton
            onClick={() => setIsCollapsed(!isCollapsed)}
            className='anime-panel-description__show-button'
          >
            <Badge
              className='anime-panel-description__show-badge'
              color={UIColors.PURPLE}
            >
              {isCollapsed ? 'Показать полностью' : 'Скрыть'}
            </Badge>
          </UnstyledButton>
        </Transition>
      </div>
    </div>
  )
}
