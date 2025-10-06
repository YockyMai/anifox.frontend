import { createStore } from '@anifox/store'
import cookie from 'cookie'

import { LOCAL_STORAGE } from '@/common/const'
import { UserAboutFragment, ViewerFragment } from '@/graphql/generated/output'

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
    setAbout: (state, about: ViewerFragment['about']) => {
      if (!state.viewer) {
        return
      }

      state.viewer.about = about
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
    setBanner: (state, banner: string | null) => {
      if (state.viewer) {
        state.viewer.banner = banner
      }
    },
    logout: (state) => {
      localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN_KEY)
      localStorage.removeItem(LOCAL_STORAGE.REFRESH_TOKEN_KEY)

      state.viewer = null
    }
  },
  {
    persist: {
      name: VIEWER_PERSIST_NAME
    }
  }
)
