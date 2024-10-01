import * as ReactPopover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'

import { UISizes } from '@/common/types/ui-sizes'

import { COLLISION_PADDING, POPOVER_OFFSET } from './popover.const'
import './popover.css'
import { PopoverProps } from './popover.interface'

const Popover = (
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
    tooltipOffset = UISizes.MD,
    openDelay = 0,
    closeDelay = 100,
    withoutArrow = false,
    ...other
  }: PopoverProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <ReactPopover.Root open={isOpen} onOpenChange={onOpenChange}>
      <ReactPopover.Trigger
        className={clsx('popover-trigger', triggerClassName)}
        asChild
      >
        <div>{trigger}</div>
      </ReactPopover.Trigger>
      {children && (
        <ReactPopover.Portal>
          <ReactPopover.Content
            {...other}
            hideWhenDetached={hideWhenDetached}
            avoidCollisions
            collisionPadding={COLLISION_PADDING}
            side={position}
            ref={ref}
            style={{ width }}
            className={clsx(
              !unstyled && 'popover-content',
              'popover-content--animations',
              'z-50',
              className
            )}
            sideOffset={POPOVER_OFFSET[tooltipOffset]}
          >
            {children}
            {!withoutArrow && (
              <ReactPopover.Arrow className='popover-content__arrow' />
            )}
          </ReactPopover.Content>
        </ReactPopover.Portal>
      )}
    </ReactPopover.Root>
  )
}

export default forwardRef(Popover)
