import { InfiniteData } from '@tanstack/react-query'
import Fuse from 'fuse.js'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'

import { FetchAnimeEpisodesResponse } from '@/services/api'

import { $episodesFilterAtoms } from '../../episodes-list/atoms'

export const useFilteredEpisodes = (
  data: InfiniteData<FetchAnimeEpisodesResponse, unknown> | undefined
) => {
  const search = useAtomValue($episodesFilterAtoms.search.debouncedValueAtom)

  const episodes = useMemo(() => {
    const episodes = data?.pages.flatMap((episodes) => episodes) ?? []

    if (!search) return episodes

    const fuse = new Fuse(episodes, {
      keys: ['title', 'number']
    })

    const result = fuse.search(search)

    return result.map(({ item }) => item)
  }, [data?.pages, search])

  return episodes
}
