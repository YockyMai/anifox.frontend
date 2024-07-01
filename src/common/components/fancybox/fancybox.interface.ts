import { OptionsType } from '@fancyapps/ui/types/Fancybox/options'
import { ReactNode } from 'react'

export type FancyboxProps = {
  delegate?: string // unique
  options?: Partial<OptionsType>
  children: ReactNode
  onFancyboxInit?: () => void
}
