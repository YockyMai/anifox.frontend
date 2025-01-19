'use client'

import { useAtomValue } from 'jotai'
import { useEffect } from 'react'

import { $siteThemeAtom } from '@/common/store/site-theme'
import { SITE_THEME } from '@/common/types/site-theme'

export const useSyncSiteTheme = () => {
  const siteTheme = useAtomValue($siteThemeAtom)

  useEffect(() => {
    if (siteTheme === SITE_THEME.DARK) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [siteTheme])
}
