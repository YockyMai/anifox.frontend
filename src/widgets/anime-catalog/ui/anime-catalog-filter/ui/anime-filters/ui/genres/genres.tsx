'use client'

import { useAtom } from 'jotai'

import { MultiSelect } from '@/common/components'
import { SelectOption } from '@/common/components/select/select.interface'
import { useAnimeGenresQuery } from '@/services/queries'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model/anime-catalog-filter'

export const Genres = () => {
  const { data, isLoading } = useAnimeGenresQuery()
  const [genres, setGenres] = useAtom($animeCatalogFilterAtoms.genres)

  const values = genres.map((id) => ({
    label: data?.find((genre) => genre.id === id)?.name ?? '',
    value: id
  }))

  const genreOptions = data?.map(({ name, id }) => ({
    value: id,
    label: name
  }))

  const onSelectGenre = (options: SelectOption[]) => {
    if (!genreOptions) {
      return
    }

    const genres = genreOptions
      .filter((genre) => options.some((option) => option.value === genre.value))
      .map((genre) => ({ id: genre.value, name: genre.label }))

    setGenres(genres.map(({ id }) => id))
  }

  return (
    <MultiSelect
      isSearchable
      isLoading={isLoading}
      label={'Жанры'}
      placeholder={'Любой'}
      values={values}
      onValuesChange={onSelectGenre}
      options={genreOptions ?? []}
    />
  )
}
