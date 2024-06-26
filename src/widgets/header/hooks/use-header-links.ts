import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { ROUTES } from '@/screens/pages.routes'

export const useHeaderLinks = () => {
  const pathname = usePathname()

  const links = useMemo(() => {
    const links = [
      {
        content: 'Аниме',
        path: ROUTES.CATALOG.ROOT
      },
      {
        content: 'Популярное',
        // TODO: потом всякие такие фильтры будут контролироваться через params
        path: '/popular'
      },
      {
        content: 'Новое',
        // TODO: потом всякие такие фильтры будут контролироваться через params
        path: '/new-anime'
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
