import { MultiSelect } from '@anifox/ui'
import { SelectOption } from '@anifox/ui/dist/components/select/select.interface'

import { useAnimeGenresQuery } from '@/services/queries'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

export const Genres = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()
  const genres = $filter.selectors.genres()

  const { data, isLoading } = useAnimeGenresQuery()

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
      .map((genre) => genre.value)

    $filter.actions.setGenres(genres)
    changeSearchParams({ genres })
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
