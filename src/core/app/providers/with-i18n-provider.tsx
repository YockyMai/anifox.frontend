import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'

import { i18n } from '@/core/i18n'

export const withI18nProvider = (component: () => ReactNode) => () => (
  <I18nextProvider i18n={i18n}>{component()}</I18nextProvider>
)
