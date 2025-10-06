import { useDisableScroll } from '@anifox/ui'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

import { useCatalogSearchParamsSync } from '../hooks'
import { $catalogSearch } from '../store'
import { CatalogSearch } from './catalog-search/catalog-search'

export const CatalogSearchRoot = () => {
  const isOpened = $catalogSearch.selectors.isOpened()

  useDisableScroll(isOpened)
  useCatalogSearchParamsSync()

  return <AnimatePresence>{isOpened && <CatalogSearch />}</AnimatePresence>
}
