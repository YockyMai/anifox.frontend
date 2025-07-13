import { Select } from '@anifox/ui'
import { useMemo } from 'react'

import { useAnimeStudiosQuery } from '@/graphql/generated/output'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

export const Studios = () => {
  const { data, loading } = useAnimeStudiosQuery()
  const { $filter, changeSearchParams } = useAnimeCatalogStores()

  const studio = $filter.selectors.studio()

  const options = useMemo(
    () =>
      data
        ? data.studios.map(({ id, name }) => ({ value: id, label: name }))
        : [],
    [data]
  )

  const value = useMemo(
    () => options.find(({ value }) => value === studio),
    [studio, options]
  )

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const studio = option ? option.value : null

        $filter.actions.setStudio(studio)
        changeSearchParams({ studio })
      }}
      isSearchable
      isLoading={loading}
      options={options}
      placeholder='Любой'
      label='Студия'
    />
  )
}
