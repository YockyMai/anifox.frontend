import { createStore } from '@anifox/store'

import { ViewerFragment } from '@/graphql/generated/output'

import { VIEWER_PERSIST_NAME } from './viewer.const'
import { ViewerStore } from './viewer.interface'

const initialState: ViewerStore = {
  viewer: null
}

export const $viewer = createStore(
  initialState,
  {
    setViewer: (state, user: ViewerFragment) => {
      state.viewer = user
    },
    resetViewer: (state) => {
      state.viewer = null
    }
  },
  {
    persist: {
      name: VIEWER_PERSIST_NAME
    }
  }
)
