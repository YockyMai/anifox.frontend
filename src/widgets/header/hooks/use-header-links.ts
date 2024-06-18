import { useMemo } from 'react'

import { ROUTES } from '@/pages/pages.routes'

export const useHeaderLinks = () => {

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

  return links
}
