import { atomWithStorage } from 'jotai/utils'

import { SITE_THEME, SiteTheme } from '@/common/types/site-theme'

import { SITE_THEME_STORAGE_KEY } from './site-theme-atoms.const'

export const $siteThemeAtom = atomWithStorage<SiteTheme>(
  SITE_THEME_STORAGE_KEY,
  SITE_THEME.DARK
)
