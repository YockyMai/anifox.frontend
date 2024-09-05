import { ReactNode } from 'react'

type ButtonParams = {
  label: string
  onClick?: () => void
}

export type StepContainerProps = {
  prevButton?: ButtonParams
  nextButton: ButtonParams
  title: string
  children: ReactNode
  footer?: ReactNode
}
