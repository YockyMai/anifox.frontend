import Fuse from 'fuse.js'
import { useAtomValue } from 'jotai'
import { useMemo } from 'react'

import { EpisodesQuery } from '@/graphql/generated/output'

import { $episodesFilterAtoms } from '../../episodes-list/atoms'

export const useFilteredEpisodes = (
  data: EpisodesQuery['episodes']['data'] | undefined
) => {
  const search = useAtomValue($episodesFilterAtoms.search.debouncedValueAtom)

  const episodes = useMemo(() => {
    const episodes = data ?? []

    if (!search) return episodes

    const fuse = new Fuse(episodes, {
      keys: ['title', 'number']
    })

    const result = fuse.search(search)

    return result.map(({ item }) => item)
  }, [data, search])

  return episodes
}
