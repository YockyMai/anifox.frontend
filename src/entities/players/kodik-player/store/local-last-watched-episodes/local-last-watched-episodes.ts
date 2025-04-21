import { createStore } from '@anifox/store'

import { LOCAL_LAST_WATCHED_EPISODES } from './local-last-watched-episodes.const'
import {
  LocalLastWatchedEpisodeStore,
  SetLocalLastWatchedEpisode,
  SetLocalLastWatchedEpisodeDuration
} from './local-last-watched-episodes.interface'

const initialState: LocalLastWatchedEpisodeStore = {
  episodes: []
}

export const $localLastWatchedEpisode = createStore(
  initialState,
  {
    setLastWatchedEpisodeDuration: (
      state,
      payload: SetLocalLastWatchedEpisodeDuration
    ) => {
      const { animeId, timing } = payload

      const episode = state.episodes.find(
        (episode) => episode.animeId === animeId
      )

      if (episode) {
        episode.timing = timing
      }
    },
    setLastWatchedEpisode: (state, payload: SetLocalLastWatchedEpisode) => {
      const { animeId, episodeId, translationId } = payload

      const episode = state.episodes.find(
        (episode) => episode.animeId === animeId
      )

      if (episode) {
        if (episode.episodeId !== episodeId) {
          episode.timing = 0
        }

        episode.episodeId = episodeId
        episode.translationId = translationId
      } else {
        state.episodes.push({
          animeId,
          episodeId,
          translationId,
          timing: 0
        })
      }
    }
  },
  {
    persist: {
      name: LOCAL_LAST_WATCHED_EPISODES
    }
  }
)
