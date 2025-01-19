import { atomWithStorage } from 'jotai/utils'

import { SiteTheme } from '@/common/types/site-theme'

import { SITE_THEME_STORAGE_KEY } from './site-theme-atoms.const'
import { initCurrentTheme } from './site-theme-atoms.utils'

export const $siteThemeAtom = atomWithStorage<SiteTheme>(
  SITE_THEME_STORAGE_KEY,
  initCurrentTheme()
)
