import * as HoverCard from '@radix-ui/react-hover-card'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import { UISizes } from '@/common/types/ui-sizes'

import { COLLISION_PADDING, TOOLTIP_OFFSET } from './tooltip.const'
import './tooltip.css'
import { TooltipProps } from './tooltip.interface'

export const Tooltip = forwardRef(
  (
    {
      children,
      label,
      hideWhenDetached,
      position,
      width,
      isOpen,
      onOpenChange,
      triggerClassName,
      className,
      unstyled,
      tooltipOffset = UISizes.MD,
      openDelay = 0,
      closeDelay = 100,
      withoutArrow = false,
      ...other
    }: TooltipProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <HoverCard.Root
        open={isOpen}
        onOpenChange={onOpenChange}
        openDelay={openDelay}
        closeDelay={closeDelay ?? openDelay}
      >
        <HoverCard.Trigger
          className={clsx('tooltip-trigger', triggerClassName)}
          asChild
        >
          <div>{children}</div>
        </HoverCard.Trigger>
        {label && (
          <HoverCard.Portal>
            <HoverCard.Content
              {...other}
              hideWhenDetached={hideWhenDetached}
              avoidCollisions
              collisionPadding={COLLISION_PADDING}
              side={position}
              ref={ref}
              style={{ width }}
              className={clsx(
                !unstyled && 'tooltip-content',
                'tooltip-content--animations',
                'z-50',
                className
              )}
              sideOffset={TOOLTIP_OFFSET[tooltipOffset]}
            >
              {label}
              {!withoutArrow && (
                <HoverCard.Arrow className='tooltip-content__arrow' />
              )}
            </HoverCard.Content>
          </HoverCard.Portal>
        )}
      </HoverCard.Root>
    )
  }
)
