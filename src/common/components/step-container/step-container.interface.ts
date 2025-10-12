import { ReactNode } from 'react'

import { UIColors } from '@/common/types/ui-colors'

type ButtonParams = {
  label: string
  onClick?: () => void
  isLoading?: boolean
  color?: UIColors
}

export type StepContainerProps = {
  prevButton?: ButtonParams
  nextButton?: ButtonParams
  title: string | ReactNode
  children: ReactNode
  footer?: ReactNode
}
