import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { ScreenLoader } from '@/common/components'

import { AnimeContent, AnimePageTabs } from './ui'

export const AnimeScreenLayout = () => {
  return (
    <>
      <AnimeContent />
      <AnimePageTabs />
      <Suspense fallback={<ScreenLoader />}>
        <Outlet />
      </Suspense>
    </>
  )
}
