import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UISize } from '@/common/types/ui-sizes'

export type HoverCardProps = {
  children: ReactNode
  trigger: ReactNode
  hideWhenDetached?: boolean
  width?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  openDelay?: number
  closeDelay?: number
  withoutArrow?: boolean
  hoverCardOffset?: UISize
  triggerClassName?: string
  unstyled?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
