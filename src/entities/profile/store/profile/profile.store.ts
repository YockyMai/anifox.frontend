import { createStore } from '@anifox/store'

import { InitProfilePayload, ProfileStore } from './profile.interface'

export const createProfileStore = (initialState: ProfileStore) =>
  createStore(initialState, {
    initProfile: (state, payload: InitProfilePayload) => {
      state.user = payload.user
      state.isOwner = payload.isOwner
    }
  })
