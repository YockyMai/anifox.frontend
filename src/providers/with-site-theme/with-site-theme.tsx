'use client'

import { useHydrateAtoms } from 'jotai/utils'
import { ReactNode, useEffect } from 'react'

import { $siteThemeAtom } from '@/common/store/site-theme'
import { SITE_THEME } from '@/common/types/site-theme'
import { useSiteTheme } from '@/entities/site-theme'

export const WithSiteTheme = ({ children }: { children: ReactNode }) => {
  const getTheme = () => {
    if (typeof document !== 'undefined') {
      const theme = document.documentElement.classList.contains(SITE_THEME.DARK)
        ? SITE_THEME.DARK
        : SITE_THEME.LIGHT

      document.documentElement.setAttribute('data-theme', theme)

      return theme
    }

    return SITE_THEME.DARK
  }

  useHydrateAtoms([[$siteThemeAtom, getTheme()]])

  const siteTheme = useSiteTheme()

  useEffect(() => {
    if (siteTheme === SITE_THEME.DARK) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.removeAttribute('data-theme')
    }
  }, [siteTheme])

  return children
}
