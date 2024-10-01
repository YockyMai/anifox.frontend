import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UISize } from '@/common/types/ui-sizes'

export interface PopoverProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  trigger: string | ReactNode
  hideWhenDetached?: boolean
  width?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  openDelay?: number
  closeDelay?: number
  withoutArrow?: boolean
  tooltipOffset?: UISize
  triggerClassName?: string
  unstyled?: boolean
}
