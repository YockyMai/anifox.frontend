import { Outlet } from 'react-router-dom'

import { AnimeContent, AnimePageTabs } from './ui'

export const AnimeScreenLayout = () => {
  return (
    <>
      <AnimeContent />
      <AnimePageTabs />
      <Outlet />
    </>
  )
}
