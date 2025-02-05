import { useAtom } from 'jotai'

import { Select } from '@/common/components'
import { useAnimeStudiosQuery } from '@/services/queries'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

export const Studios = () => {
  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const { data, isLoading } = useAnimeStudiosQuery()

  const [studio, setStudio] = useAtom($animeCatalogFilterAtoms.studio)

  return (
    <Select
      value={studio}
      onValueChange={(option) => {
        const newValue = option ? option.value : null

        setStudio(newValue)
        changeSearchParams({ studio: newValue })
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
