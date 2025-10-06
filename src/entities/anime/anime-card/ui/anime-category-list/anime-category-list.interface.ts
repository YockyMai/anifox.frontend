import { ReactNode } from 'react'

import { AnimeLiteFragment } from '@/graphql/generated/output'

export type AnimeCategoryListProps = {
  category: ReactNode
  categoryLink?: string
  items: AnimeLiteFragment[]
  icon: ReactNode
  isLoading: boolean
}
