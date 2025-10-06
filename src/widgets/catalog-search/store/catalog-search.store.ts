import { createStore } from '@anifox/store'
import { createSearchParams } from 'react-router'

import { CatalogSearchStore } from './catalog-search.interface'

const searchParams = createSearchParams(document.location.search)

const initialStore: CatalogSearchStore = {
  isOpened: searchParams.get('isOpened') !== null,
  search: searchParams.get('search') ?? ''
}

export const $catalogSearch = createStore(initialStore, {
  toggleIsOpened: (state) => {
    state.isOpened = !state.isOpened
  },
  setSearch: (state, search: string) => {
    state.search = search
  }
})
