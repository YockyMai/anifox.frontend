import { ReactNode } from 'react'

export type AnimeInfoBlockItem = {
  element: ReactNode
  href?: string
  key?: string
}

export type AnimeInfoBlockProps = {
  title: string
  infos: AnimeInfoBlockItem[]
}
