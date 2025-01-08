import { ReactNode } from 'react'

type Tab = {
  key: string
  content: ReactNode
  onClick?: (key: string) => void
}

export type TabsProps = {
  tabs: Tab[]
  activeTab?: string
  onChange?: (key: string) => void
  withoutHoverIndicator?: boolean
  withoutActiveBar?: boolean
  hoverColor?: string
  activeTabColor?: string
  fullWidth?: boolean
}
