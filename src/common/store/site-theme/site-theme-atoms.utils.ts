import { SITE_THEME, SiteTheme } from '@/common/types/site-theme'

export const getSystemTheme = (): SiteTheme =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? SITE_THEME.DARK
    : SITE_THEME.LIGHT

export const initCurrentTheme = () => {
  if (typeof localStorage !== 'undefined' && 'theme' in localStorage) {
    if (localStorage.getItem('theme') === SITE_THEME.LIGHT) {
      return SITE_THEME.LIGHT
    } else if (localStorage.getItem('theme') === SITE_THEME.DARK) {
      return SITE_THEME.DARK
    } else {
      return getSystemTheme()
    }
  } else {
    return getSystemTheme()
  }
}
