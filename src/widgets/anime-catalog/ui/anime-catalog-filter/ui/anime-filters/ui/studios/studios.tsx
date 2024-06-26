'use client'

import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'

import { useAnimeStudiosQuery } from '@/services/queries'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

export const Studios = () => {
  const { data, isLoading } = useAnimeStudiosQuery()

  const [studio, setStudio] = useAtom($animeCatalogFilterAtoms.studio)

  return (
    <Select
      value={studio}
      onValueChange={(option) => setStudio(option ? option.value : null)}
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
