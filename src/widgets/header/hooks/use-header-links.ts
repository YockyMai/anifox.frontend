import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

export const useHeaderLinks = () => {
  const { pathname } = useLocation()

  const links = useMemo(() => {
    const links = [
      {
        content: 'Аниме',
        path: ROUTES.CATALOG.ROOT
      },
      {
        content: 'Популярное',
        path: `${ROUTES.CATALOG.POPULAR}`
      },
      {
        content: 'Новое',
        path: ROUTES.CATALOG.POPULAR_ONGOING
      }
    ]

    return links
  }, [])

  const [activeTab, setActiveTab] = useState(
    links.find(({ path }) => pathname === path)?.path
  )

  useEffect(() => {
    const activeTab = links.find(({ path }) => pathname === path)?.path

    setActiveTab(activeTab)
  }, [links, pathname])

  return { links, activeTab, setActiveTab }
}
