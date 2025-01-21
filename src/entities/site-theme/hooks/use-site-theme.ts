import { useAtomValue } from 'jotai'

import { $siteThemeAtom } from '@/common/store/site-theme'

export const useSiteTheme = () => {
  const theme = useAtomValue($siteThemeAtom)

  return theme
}
