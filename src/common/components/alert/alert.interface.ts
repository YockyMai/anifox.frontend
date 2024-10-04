import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UIColor } from '@/common/types/ui-colors'
import { UISize } from '@/common/types/ui-sizes'
import { UIVariant } from '@/common/types/ui-variants'

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
