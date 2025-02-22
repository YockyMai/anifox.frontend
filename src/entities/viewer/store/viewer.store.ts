import { createStore } from '@anifox/store'

import { User, ViewerStore } from './viewer.interface'

const initialState: ViewerStore = {
  user: null
}

export const $viewer = createStore(initialState, {
  setViewer: (state, user: User) => {
    state.user = user
  },
  resetViewer: (state) => {
    state.user = null
  }
})
