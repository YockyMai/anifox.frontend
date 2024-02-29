import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

import { Languages } from './i18n.interface'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: Languages.RU,
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
