import { MultiSelect } from '@anifox/ui'
import { SelectOption } from '@anifox/ui/select/select.interface'
import { useAtom } from 'jotai'

import { useAnimeGenresQuery } from '@/services/queries'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model/anime-catalog-filter'

export const Genres = () => {
  const { changeSearchParams } = useAnimeCatalogFilterContext()

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
      .map((genre) => genre.value)

    setGenres(genres)
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
