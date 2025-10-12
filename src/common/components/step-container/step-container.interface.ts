import { ReactNode } from 'react'

type ButtonParams = {
  label: string
  onClick?: () => void
  isLoading?: boolean
}

export type StepContainerProps = {
  prevButton?: ButtonParams
  nextButton?: ButtonParams
  title: string | ReactNode
  children: ReactNode
  footer?: ReactNode
}
