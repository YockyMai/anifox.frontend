import { IconMoon, IconSun } from '@tabler/icons-react'
import { useAtom } from 'jotai'
import React from 'react'

import { UnstyledButton } from '@/common/components'
import { $siteThemeAtom } from '@/common/store/site-theme'
import { SITE_THEME } from '@/common/types/site-theme'

export const SiteThemeToggler = () => {
  const [theme, setTheme] = useAtom($siteThemeAtom)

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme =
        prev === SITE_THEME.DARK ? SITE_THEME.LIGHT : SITE_THEME.DARK

      localStorage.setItem('theme', newTheme)

      return newTheme
    })
  }

  return (
    <UnstyledButton onClick={toggleTheme}>
      {theme === SITE_THEME.LIGHT ? <IconSun /> : <IconMoon />}
    </UnstyledButton>
  )
}
