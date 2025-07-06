import { createStore } from '@anifox/store'

import { AnifoxSearchStore } from './anifox-search.interface'

const initialStore: AnifoxSearchStore = {
  isOpened: false,
  search: ''
}

export const $anifoxSearch = createStore(initialStore, {
  toggleIsOpened: (state) => {
    state.isOpened = !state.isOpened
  },
  setSearch: (state, search: string) => {
    state.search = search
  }
})
