import { ReactNode } from 'react'

import { Anime } from '@/services/api'

export type AnimeCategoryListProps = {
  category: ReactNode
  categoryLink?: string
  items: Anime[]
  icon: ReactNode
  isLoading: boolean
}
