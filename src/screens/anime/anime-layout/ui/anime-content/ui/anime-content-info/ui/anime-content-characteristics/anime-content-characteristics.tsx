import dayjs from 'dayjs'
import { useMemo } from 'react'
import { useParams } from 'react-router'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'
import {
  MAP_ANIME_STATUSES_LABEL,
  MAP_ANIME_TYPE_VARIANTS
} from '@/services/api'
import { useAnimeQuery } from '@/services/queries'
import { createAnimeCatalogSearchParams } from '@/widgets/anime-catalog'

import { AnimeInfoBlock } from '../anime-info-block'
import { AnimeInfoBlockItem } from '../anime-info-block/anime-info-block.interface'

export const AnimeContentCharacteristics = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery(animeUrl!)

  const infos = useMemo(() => {
    const infos: AnimeInfoBlockItem[] = []

    infos.push(
      {
        element: `Серий: ${data?.episodes_aired ?? '?'} из ${data?.episodes ?? '?'}`,
        key: 'episodes'
      },
      {
        element: `Стартовал: ${data?.aired_on ? dayjs(data.aired_on).locale('ru').format('D MMM YYYYг') : '?'}`,
        key: 'aired_on'
      },
      {
        element: `Год: ${data?.year ?? '?'}`,
        href: data?.year
          ? `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ years: [data.year] })}`
          : undefined,
        key: 'year'
      },
      {
        element: `Тип: ${data?.type ? MAP_ANIME_TYPE_VARIANTS[data.type] : '?'}`,
        href: data?.type
          ? `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ type: data.type })}`
          : undefined,
        key: 'type'
      },
      {
        element: `Статус: ${data?.status ? MAP_ANIME_STATUSES_LABEL[data.status] : '?'}`,
        href: data?.status
          ? `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ status: data.status })}`
          : undefined,
        key: 'status'
      }
    )

    if (data?.released_on) {
      infos.push({
        element: `Выпущен: ${dayjs(data.released_on).locale('ru').format('D MMM YYYYг')}`,
        key: 'released_on'
      })
    }

    return infos
  }, [
    data?.episodes,
    data?.aired_on,
    data?.year,
    data?.type,
    data?.status,
    data?.released_on
  ])

  return <AnimeInfoBlock title='Об аниме: ' infos={infos} />
}
