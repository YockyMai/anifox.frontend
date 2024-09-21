'use client'

import { useHover } from '@anifox/hooks'
import { useRef, useState } from 'react'

import { Transition } from '../transition'
import { TabItem } from './components/tab-item'
import { useActiveBarPosition } from './hooks'
import { useHoveredIndicatorPosition } from './hooks/use-hovered-indicator-position'
import './tabs.css'
import { TabsProps } from './tabs.interface'

export const Tabs = ({
  tabs,
  activeTab,
  onChange,
  withoutActiveBar,
  withoutHoverIndicator
}: TabsProps) => {
  const itemsRef = useRef<Record<string, HTMLDivElement | null>>({})
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  const activeBarPosition = useActiveBarPosition(itemsRef, activeTab)
  const hoveredIndicatorPosition = useHoveredIndicatorPosition(
    itemsRef,
    hoveredTab
  )

  const { hoverProps, isHovered } = useHover()

  return (
    <div {...hoverProps} className='tabs'>
      {tabs.map(({ content, key, onClick }) => (
        <TabItem
          onClick={(key) => {
            onChange?.(key)
            onClick?.(key)
          }}
          onHover={(key) => setHoveredTab(key)}
          ref={(el) => {
            itemsRef.current[key] = el
          }}
          isActive={activeTab === key}
          key={key}
          tabKey={key}
        >
          {content}
        </TabItem>
      ))}

      {activeBarPosition && !withoutActiveBar && (
        <span
          className='tabs__active-bar tabs__active-bar_color'
          style={{
            left: activeBarPosition.left,
            width: activeBarPosition.width
          }}
        />
      )}

      <Transition
        duration={150}
        className='-z-10'
        mounded={isHovered && !withoutHoverIndicator}
      >
        <span
          className='tabs__hovered-indicator tabs__hover-indicator_color'
          style={{
            left: hoveredIndicatorPosition?.left,
            width: hoveredIndicatorPosition?.width
          }}
        />
      </Transition>
    </div>
  )
}
