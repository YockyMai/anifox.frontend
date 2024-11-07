import { ReactNode } from 'react'

export type ModalProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  trigger?: ReactNode
  children: ReactNode
  withoutCloseButton?: boolean
  withoutPadding?: boolean
}
