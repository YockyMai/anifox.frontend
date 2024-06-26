'use client'

import { useParams } from 'next/navigation'
import React, { useMemo } from 'react'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'
import { useAnimeQuery } from '@/services/queries'

import { AnimeInfoBlock } from '../anime-info-block'

export const AnimeContentStudios = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery(animeUrl)

  const infos = useMemo(() => {
    const studios = data?.studio ?? []

    return studios.map(({ name, id }) => ({
      element: name,
      href: `${ROUTES.CATALOG.ROOT}?studio=${id}`,
      key: id
    }))
  }, [data?.studio])

  if (!data?.studio?.length) return null

  return <AnimeInfoBlock title='Студии: ' infos={infos} />
}
