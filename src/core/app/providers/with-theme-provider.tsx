import { ThemeProvider } from '@anifox/ui'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { Language } from '@/core/i18n'

export const withThemeProvider = (component: () => ReactNode) => () => {
  const { i18n } = useTranslation()

  return (
    <ThemeProvider language={i18n.language as Language}>
      {component()}
    </ThemeProvider>
  )
}
