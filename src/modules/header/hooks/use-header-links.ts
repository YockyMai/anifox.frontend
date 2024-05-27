import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { ROUTES } from '@/pages/pages.routes'

export const useHeaderLinks = () => {
  const { t } = useTranslation()

  const links = useMemo(() => {
    const links = [
      {
        content: t('common.anime'),
        path: ROUTES.CATALOG.ROOT
      },
      {
        content: t('header.links-title.popular'),
        // TODO: потом всякие такие фильтры будут контролироваться через params
        path: '/popular'
      },
      {
        content: t('header.links-title.new-anime'),
        // TODO: потом всякие такие фильтры будут контролироваться через params
        path: '/new-anime'
      }
    ]

    return links
  }, [t])

  return links
}
