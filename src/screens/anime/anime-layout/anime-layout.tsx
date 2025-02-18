import { ScreenLoader } from '@anifox/ui'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

import { AnimeLayoutMetadata } from './anime-layout.metadata'
import { AnimeContent, AnimePageTabs } from './ui'

export const AnimeScreenLayout = () => {
  return (
    <>
      <AnimeLayoutMetadata />

      <AnimeContent />
      <AnimePageTabs />
      <Suspense fallback={<ScreenLoader />}>
        <Outlet />
      </Suspense>
    </>
  )
}
