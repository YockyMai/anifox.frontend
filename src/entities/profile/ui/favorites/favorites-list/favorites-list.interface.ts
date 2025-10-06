import { FavoritesFilterView } from '@/entities/profile/store/favorites-filter'

export type FavoritesListDataItem = {
  image: string
  title: string
  count: number
  to: string
  key: string
}

export type FavoritesListProps = {
  view: FavoritesFilterView
  fetchNextPage: () => void
  loading: boolean
  data: FavoritesListDataItem[]
  pageInfo?: {
    page: number
    hasNextPage: boolean
  }
}
