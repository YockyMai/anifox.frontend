import { atom, createStore } from 'jotai'

import { AnimeResponse } from '@/services/api'

export const animeAtom = atom<AnimeResponse>({} as AnimeResponse)
