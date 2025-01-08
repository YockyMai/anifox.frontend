import { ReactNode } from 'react'

export type TabProps = {
  children: ReactNode
  isActive?: boolean
  onClick: (key: string) => void
  onHover?: (key: string) => void
  tabKey: string
  activeTabColor?: string
}
