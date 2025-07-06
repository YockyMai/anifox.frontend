import { useDisableScroll } from '@anifox/ui'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

import { $anifoxSearch } from '../store'
import { CatalogSearch } from './catalog-search/anifox-search'

export const CatalogSearchRoot = () => {
  const isOpened = $anifoxSearch.selectors.isOpened()

  useDisableScroll(isOpened)

  return <AnimatePresence>{isOpened && <CatalogSearch />}</AnimatePresence>
}
