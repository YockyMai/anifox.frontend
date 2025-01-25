import { Locale } from '@/i18n/types'

export type NextPageParams<T = unknown> = {
  locale: Locale
} & T
