import * as ReactHoverCard from '@radix-ui/react-hover-card'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import { UISizes } from '@/common/types/ui-sizes'

import { COLLISION_PADDING, HOVER_CARD_OFFSET } from './hover-card.const'
import './hover-card.css'
import { HoverCardProps } from './hover-card.interface'

export const HoverCard = (
  {
    children,
    trigger,
    hideWhenDetached,
    position,
    width,
    isOpen,
    onOpenChange,
    triggerClassName,
    className,
    unstyled,
    hoverCardOffset: tooltipOffset = UISizes.MD,
    openDelay = 0,
    closeDelay = 100,
    withoutArrow = false,
    ...other
  }: HoverCardProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <ReactHoverCard.Root
      open={isOpen}
      onOpenChange={onOpenChange}
      openDelay={openDelay}
      closeDelay={closeDelay ?? openDelay}
    >
      <ReactHoverCard.Trigger
        className={clsx('hover-card-trigger', triggerClassName)}
        asChild
      >
        <div>{trigger}</div>
      </ReactHoverCard.Trigger>

      <ReactHoverCard.Portal>
        <ReactHoverCard.Content
          {...other}
          hideWhenDetached={hideWhenDetached}
          avoidCollisions
          collisionPadding={COLLISION_PADDING}
          side={position}
          ref={ref}
          style={{ width }}
          className={clsx(
            !unstyled && 'hover-card-content',
            'hover-card-content--animations',
            'z-50',
            className
          )}
          sideOffset={HOVER_CARD_OFFSET[tooltipOffset]}
        >
          {children}
          {!withoutArrow && (
            <ReactHoverCard.Arrow className='hover-card-content__arrow' />
          )}
        </ReactHoverCard.Content>
      </ReactHoverCard.Portal>
    </ReactHoverCard.Root>
  )
}

export default forwardRef(HoverCard)
