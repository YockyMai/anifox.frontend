import { Select } from '@anifox/ui'

import { useAnimeStudiosQuery } from '@/services/queries'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

export const Studios = () => {
  const { data, isLoading } = useAnimeStudiosQuery()

  const { $filter } = useAnimeCatalogStores()

  const studio = $filter.selectors.studio()

  return (
    <Select
      value={studio}
      onValueChange={(option) => {
        const newValue = option ? option.value : null

        $filter.actions.setStudio(newValue)
      }}
      isSearchable
      isLoading={isLoading}
      options={
        data ? data?.map(({ name }) => ({ value: name, label: name })) : []
      }
      placeholder={'Любой'}
      label={'Студия'}
    />
  )
}
