import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UIColor, UISize, UIVariant } from '@/main'

export interface AlertProps
  extends DetailedHTMLProps<
    Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    HTMLDivElement
  > {
  title: ReactNode
  icon?: ReactNode
  children?: ReactNode
  variant?: UIVariant
  color?: UIColor
  radius?: UISize
  withCloseButton?: boolean
}
