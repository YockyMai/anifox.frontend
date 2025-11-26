import { useStore } from '@anifox/store'
import { UnstyledButton } from '@anifox/ui'
import { IconTags, IconX } from '@tabler/icons-react'

import {
  MAP_ANIME_ORDER_LABEL,
  MAP_ANIME_SEASON_LABEL,
  MAP_ANIME_STATUS_LABEL,
  MAP_ANIME_TYPE_VARIANTS,
  MAP_SORT_LABEL
} from '@/common/const/translate'
import {
  useAnimeGenresQuery,
  useAnimeStudiosQuery
} from '@/graphql/generated/output'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context'

import { FilterBadge } from './filter-badge'

export const FilterBadges = () => {
  const { $filter } = useAnimeCatalogStores()

  const { data: genresData } = useAnimeGenresQuery()
  const { data: studiosData } = useAnimeStudiosQuery()

  const {
    search,
    ratingMpa,
    season,
    sort,
    minimalAge,
    status,
    studio,
    translations,
    type,
    years,
    order,
    genres
  } = useStore($filter.store)

  const badges = [
    search && (
      <FilterBadge
        className='bg-red-500'
        onRemoveClick={() => $filter.actions.setSearch('')}
      >
        Поиск: {search}
      </FilterBadge>
    ),
    ratingMpa && (
      <FilterBadge
        onRemoveClick={() => $filter.actions.setRatingMpa(null)}
        className='bg-yellow-500'
      >
        {ratingMpa}
      </FilterBadge>
    ),
    season && (
      <FilterBadge
        onRemoveClick={() => $filter.actions.setSeason(null)}
        className='bg-orange-500'
      >
        {MAP_ANIME_SEASON_LABEL[season]}
      </FilterBadge>
    ),
    sort && (
      <FilterBadge
        onRemoveClick={() => $filter.actions.setSort(null)}
        className='bg-purple-500'
      >
        {MAP_SORT_LABEL[sort]}
      </FilterBadge>
    ),
    minimalAge && (
      <FilterBadge
        onRemoveClick={() => $filter.actions.setMinimalAge(null)}
        className='bg-rose-500'
      >
        {minimalAge}+
      </FilterBadge>
    ),
    status && (
      <FilterBadge
        onRemoveClick={() => $filter.actions.setStatus(null)}
        className='bg-pink-500'
      >
        {MAP_ANIME_STATUS_LABEL[status]}
      </FilterBadge>
    ),
    studio && studiosData?.studios && (
      <FilterBadge
        onRemoveClick={() => $filter.actions.setStudio(null)}
        className='bg-cyan-500'
      >
        {studiosData?.studios.find(({ id }) => id === studio)?.name}
      </FilterBadge>
    ),
    type && (
      <FilterBadge
        onRemoveClick={() => $filter.actions.setType(null)}
        className='bg-fuchsia-500'
      >
        {MAP_ANIME_TYPE_VARIANTS[type]}
      </FilterBadge>
    ),
    order && (
      <FilterBadge onRemoveClick={() => $filter.actions.setOrder(null)}>
        {MAP_ANIME_ORDER_LABEL[order]}
      </FilterBadge>
    ),
    ...translations.map((translation) => (
      <FilterBadge
        onRemoveClick={() => $filter.actions.removeTranslation(translation)}
        className='bg-blue-400'
      >
        {translation}
      </FilterBadge>
    )),
    ...years.map((year) => (
      <FilterBadge
        onRemoveClick={() => $filter.actions.removeYear(year)}
        className='bg-slate-500'
      >
        {year}
      </FilterBadge>
    )),
    ...genres.map((genre) => (
      <FilterBadge
        onRemoveClick={() => $filter.actions.removeGenre(genre)}
        className='bg-teal-500'
      >
        {genresData?.genres.find(({ id }) => id === genre)?.name}
      </FilterBadge>
    ))
  ].filter(Boolean)

  return (
    <div className='mb-8 mt-1.5 flex flex-wrap items-center gap-3'>
      <IconTags />

      {badges}

      <UnstyledButton
        className='flex h-6 w-6 items-center justify-center rounded bg-red-400'
        onClick={() => $filter.actions.resetFilters()}
      >
        <IconX className='stroke-white' size={16} />
      </UnstyledButton>
    </div>
  )
}
