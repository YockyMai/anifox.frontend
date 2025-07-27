import { ScreenSection, Table } from '@anifox/ui'
import clsx from 'clsx'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import React, { useMemo } from 'react'
import { useParams } from 'react-router'

import { useEpisodesHistoryQuery } from '@/graphql/generated/output'

import { AnimePageParams } from '../../anime.interface'
import { TABLE_MAX_HEIGHT } from './anime-episodes-history.const'

export const AnimeEpisodesHistory = () => {
  const { animeUrl } = useParams<AnimePageParams>()
  const { data, loading } = useEpisodesHistoryQuery({
    variables: {
      animeUrl: animeUrl!
    }
  })

  const columns = useMemo(() => {
    return { number: '№ серии', title: 'Название серии', aired: 'Дата выхода' }
  }, [])

  const rows = useMemo(() => {
    const rows = (data?.episodesHistory ?? []).map(
      ({ aired, number, title, isUpcoming }) => {
        const className = clsx(
          isUpcoming && 'font-bold text-orange-400 dark:text-orange-300'
        )

        return {
          aired: (
            <p className={className}>
              {aired
                ? dayjs(aired).locale('ru').format('D MMMM YYYYг.')
                : 'Неизвестно'}
            </p>
          ),
          number: <p className={className}>{number} серия</p>,
          title: <p className={className}>{title ?? `${number} серия`}</p>
        }
      }
    )
    return rows
  }, [data?.episodesHistory])

  if (loading || !data?.episodesHistory.length) return null

  return (
    <ScreenSection
      withContainer
      title='График выхода последних серий'
      description='Новые серии будут доступны через 1–2 дня — студиям нужно время на их озвучку.'
    >
      <Table maxHeight={TABLE_MAX_HEIGHT} columns={columns} rows={rows} />
    </ScreenSection>
  )
}
