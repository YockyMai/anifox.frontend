import { useMemo } from 'react'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'
import { createAnimeCatalogSearchParams } from '@/widgets/anime-catalog'

import { AnimeInfoBlock } from '../anime-info-block'

export const AnimeContentGenres = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const infos = useMemo(() => {
    const genres = data?.anime.genres ?? []

    return genres.map(({ name, id }) => ({
      element: name,
      href: `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ genres: [id] })}`,
      key: id
    }))
  }, [data?.anime.genres])

  if (!data?.anime.genres?.length) return null

  return <AnimeInfoBlock title='Жанры: ' infos={infos} />
}
