import { useMemo } from 'react'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'
import { createAnimeCatalogSearchParams } from '@/widgets/anime-catalog'

import { AnimeInfoBlock } from '../anime-info-block'

export const AnimeContentStudios = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const infos = useMemo(() => {
    const studios = data?.anime?.studios ?? []

    return studios.map(({ name, id }) => ({
      element: name,
      href: `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ studio: id })}`,
      key: id
    }))
  }, [data?.anime.studios])

  if (!data?.anime.studios?.length) return null

  return <AnimeInfoBlock title='Студии: ' infos={infos} />
}
