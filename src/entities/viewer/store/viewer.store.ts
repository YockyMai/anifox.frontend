import { createStore } from '@anifox/store'
import cookie from 'cookie'

import { COOKIES } from '@/common/const'
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
    logout: (state) => {
      cookie.serialize(COOKIES.ACCESS_TOKEN_KEY, '', {
        maxAge: -1
      })
      cookie.serialize(COOKIES.REFRESH_TOKEN_KEY, '', {
        maxAge: -1
      })

      state.viewer = null
    }
  },
  {
    persist: {
      name: VIEWER_PERSIST_NAME
    }
  }
)
