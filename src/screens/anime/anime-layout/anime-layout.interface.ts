import { ReactNode } from 'react'

import { AnimeResponse } from '@/services/api'

export type AnimePageLayoutProps = {
  children: ReactNode
  anime: AnimeResponse
}
