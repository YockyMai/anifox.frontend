import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export type TooltipProps = {
  children?: ReactNode
  label: string
  hideWhenDetached?: boolean
  width?: number
  position?: 'top' | 'right' | 'bottom' | 'left'
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
  withoutArrow?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
