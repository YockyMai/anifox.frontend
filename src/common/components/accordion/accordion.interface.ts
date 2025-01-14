import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

import { UIColor } from '@/common/types/ui-colors'

export type AccordionItem = {
  id: string
  trigger: ReactNode
  content?: ReactNode
  color?: UIColor
}

export type AccordionProps = {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  defaultValue?: string[] | string
} & DetailedHTMLProps<
  Omit<HTMLAttributes<HTMLDivElement>, 'dir'>,
  HTMLDivElement
>
