'use client'

import dayjs from 'dayjs'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'
import { useAnimeQuery } from '@/services/queries'

import { AnimeInfoBlock } from '../anime-info-block'
import { AnimeInfoBlockItem } from '../anime-info-block/anime-info-block.interface'

export const AnimeContentCharacteristics = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery(animeUrl)

  const type = data?.type ?? '?'
  const status = data!.status
  const seasons = `${data!.episodes_aired || '?'} из ${data!.episodes || '?'}`

  const releasedAt = useMemo(() => {
    if (data!.released_on) {
      return dayjs(data!.released_on).locale('ru').format('D MMM YYYYг')
    }
  }, [data])

  const airedAt = useMemo(() => {
    if (data!.aired_on) {
      return dayjs(data!.aired_on).locale('ru').format('D MMM YYYYг')
    }
  }, [data])

  const infos = useMemo(() => {
    const infos: AnimeInfoBlockItem[] = []

    infos.push(
      {
        element: `Серий: ${seasons}`,
        href: `${ROUTES.CATALOG.ROOT}?season=${data!.season}`,
        key: 'seasons'
      },
      {
        element: `Стартовал: ${airedAt}`,
        href: `${ROUTES.CATALOG.ROOT}?aired_on=${data!.aired_on}`,
        key: 'aired_on'
      },
      {
        element: `Год: ${data!.year}`,
        href: `${ROUTES.CATALOG.ROOT}?year=${data!.year}`,
        key: 'year'
      },
      {
        element: `Тип: ${type}`,
        href: `${ROUTES.CATALOG.ROOT}?type=${type}`,
        key: 'type'
      }
    )

    if (releasedAt) {
      infos.push({
        element: `Выпущен: ${releasedAt}`,
        href: `${ROUTES.CATALOG.ROOT}?releasedAt=${data!.released_on}`,
        key: 'releasedAt'
      })
    }

    if (data!.status) {
      infos.push({
        element: `Статус: ${status}`,
        href: `${ROUTES.CATALOG.ROOT}?status=${status}`,
        key: 'status'
      })
    }

    return infos
  }, [airedAt, data, releasedAt, seasons, status, type])

  return <AnimeInfoBlock title='Об аниме: ' infos={infos} />
}
