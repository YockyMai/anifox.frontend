import { useMemo } from 'react'
import { useParams } from 'react-router'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'
import { useAnimeQuery } from '@/services/queries'
import { createAnimeCatalogSearchParams } from '@/widgets/anime-catalog'

import { AnimeInfoBlock } from '../anime-info-block'

export const AnimeContentGenres = () => {
  const { animeUrl } = useParams<AnimePageParams>()!
  const { data } = useAnimeQuery(animeUrl!)

  const infos = useMemo(() => {
    const genres = data?.genres ?? []

    return genres.map(({ name, id }) => ({
      element: name,
      href: `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ genres: [id] })}`,
      key: id
    }))
  }, [data?.genres])

  if (!data?.genres?.length) return null

  return <AnimeInfoBlock title='Жанры: ' infos={infos} />
}
