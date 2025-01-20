'use client'

import { ReactNode, useEffect } from 'react'

import { SITE_THEME } from '@/common/types/site-theme'
import { useSiteTheme } from '@/entities/site-theme'

export const WithSiteTheme = ({ children }: { children: ReactNode }) => {
  const siteTheme = useSiteTheme()

  useEffect(() => {
    if (siteTheme === SITE_THEME.DARK) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [siteTheme])

  return <>{children}</>
}
