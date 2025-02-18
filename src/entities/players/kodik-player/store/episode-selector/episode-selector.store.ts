import { createStore } from '@anifox/store'

import { KODIK_TABS } from './episode-selector.const'
import { EpisodeSelectorStore, KodikTabs } from './episode-selector.interface'

const initialState: EpisodeSelectorStore = {
  activeTab: KODIK_TABS.EPISODES
}

export const createEpisodeSelectorStore = () =>
  createStore(initialState, {
    setActiveTab: (state, payload: KodikTabs) => {
      state.activeTab = payload
    }
  })
