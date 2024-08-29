import { ReactNode } from 'react'

type ButtonParams = {
  label: string
  isValid: boolean
}

export type StepBodyProps = {
  prevButton?: ButtonParams
  nextButton: ButtonParams
  title: string
  children: ReactNode
  footer?: ReactNode
}
