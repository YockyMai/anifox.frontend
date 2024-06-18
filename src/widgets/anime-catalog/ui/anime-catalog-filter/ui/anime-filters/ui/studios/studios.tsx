'use client'

import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'

import { useGetAnimeStudios } from '@/services/queries'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

export const Studios = () => {
  const { data, isLoading } = useGetAnimeStudios()

  const [studio, setStudio] = useAtom($animeCatalogFilterAtoms.studio)

  return (
    <div>
      <Select
        value={studio}
        onValueChange={(option) => setStudio(option ? option.value : null)}
        isSearchable
        isLoading={isLoading}
        options={
          data ? data?.map(({ id, name }) => ({ label: name, value: id })) : []
        }
        placeholder={'Любой'}
        label={'Студия'}
      />
    </div>
  )
}
