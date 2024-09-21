import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UISize } from '@/main'

export interface TooltipProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  label: string | ReactNode
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
