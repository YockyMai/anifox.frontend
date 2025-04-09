import dayjs from 'dayjs'
import { useMemo } from 'react'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'
import { MAP_ANIME_STATUS_LABEL, MAP_ANIME_TYPE_VARIANTS } from '@/services/api'
import { createAnimeCatalogSearchParams } from '@/widgets/anime-catalog'

import { AnimeInfoBlock } from '../anime-info-block'
import { AnimeInfoBlockItem } from '../anime-info-block/anime-info-block.interface'

export const AnimeContentCharacteristics = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const anime = data?.anime

  const infos = useMemo(() => {
    const infos: AnimeInfoBlockItem[] = []

    infos.push(
      {
        element: `Серий: ${anime?.episodesAired ?? '?'} из ${anime?.episodesCount ?? '?'}`,
        key: 'episodes'
      },
      {
        element: `Стартовал: ${anime?.episodesAired ? dayjs(anime?.episodesAired).locale('ru').format('D MMM YYYYг') : '?'}`,
        key: 'aired_on'
      },
      {
        element: `Год: ${anime?.year ?? '?'}`,
        href: anime?.year
          ? `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ years: [anime?.year] })}`
          : undefined,
        key: 'year'
      },
      {
        element: `Тип: ${anime?.type ? MAP_ANIME_TYPE_VARIANTS[anime?.type] : '?'}`,
        href: anime?.type
          ? `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ type: data.anime.type })}`
          : undefined,
        key: 'type'
      },
      {
        element: `Статус: ${anime?.status ? MAP_ANIME_STATUS_LABEL[anime.status] : '?'}`,
        href: anime?.status
          ? `${ROUTES.CATALOG.ROOT}?${createAnimeCatalogSearchParams({ status: anime.status })}`
          : undefined,
        key: 'status'
      }
    )

    if (anime?.releasedOn) {
      infos.push({
        element: `Выпущен: ${dayjs(anime.releasedOn).locale('ru').format('D MMM YYYYг')}`,
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
