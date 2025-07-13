import { createStore } from '@anifox/store'
import cookie from 'cookie'

import { LOCAL_STORAGE } from '@/common/const'
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
    updateLastSeen: (state) => {
      if (state.viewer) {
        state.viewer.lastSeen = new Date()
      }
    },
    setAvatar: (state, avatar: string | null) => {
      if (state.viewer) {
        state.viewer.avatar = avatar
      }
    },
    logout: (state) => {
      cookie.serialize(LOCAL_STORAGE.ACCESS_TOKEN_KEY, '', {
        maxAge: -1
      })
      cookie.serialize(LOCAL_STORAGE.REFRESH_TOKEN_KEY, '', {
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
