import { ReactNode } from 'react'

import { AnimeContent, AnimePageTabs } from './ui'

export const AnimeScreenLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AnimeContent />
      <AnimePageTabs />
      {children}
    </>
  )
}
