import { ReactNode } from 'react'

export type MenuListItem = {
  id: string
  title: string
  icon: ReactNode
  link?: string
}

export type MenuListGroup = {
  title?: string
  items: MenuListItem[]
}

export type MenuListProps = {
  items: (MenuListGroup | MenuListItem)[]
  theme?: 'default' | 'darker'
  selectedItemId?: string
}
