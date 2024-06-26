'use client'

import { MultiSelect } from '@anifox/ui'
import { SelectOption } from '@anifox/ui/dist/components/select/select.interface'
import { useAtom } from 'jotai'

import { useAnimeGenresQuery } from '@/services/queries'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model/anime-catalog-filter'

export const Genres = () => {
  const { data, isLoading } = useAnimeGenresQuery()
  const [genres, setGenres] = useAtom($animeCatalogFilterAtoms.genres)

  const values = genres.map((genre) => ({ label: genre.name, value: genre.id }))

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

    setGenres(genres)
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
