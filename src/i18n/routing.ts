import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

import { LOCALES } from './const'

export const routing = defineRouting({
  locales: [LOCALES.RU, LOCALES.EN],
  defaultLocale: LOCALES.RU,
  localePrefix: 'as-needed'
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
