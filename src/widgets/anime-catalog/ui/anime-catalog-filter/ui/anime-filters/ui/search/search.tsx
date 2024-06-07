import { useDebounce } from '@anifox/hooks'
import { Input } from '@anifox/ui'
import { IconSearch, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useStore } from 'zustand'

import { $animeCatalogFilterModel } from '@/widgets/anime-catalog/model/anime-catalog-filter'

import './search.css'

export const Search = () => {
  const search = useStore(
    $animeCatalogFilterModel.store,
    (state) => state.search
  )

  const [searchValue, setSearchValue] = useState(search)
  useEffect(() => {
    setSearchValue(search)
  }, [search])

  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    $animeCatalogFilterModel.actions.setSearchQuery(debouncedValue)
  }, [debouncedValue])

  const clearSearch = () => {
    $animeCatalogFilterModel.actions.setSearchQuery('')
  }

  return (
    <div className={'anime-filters__search'}>
      <Input
        maxLength={40}
        label={'Поиск'}
        placeholder={'Название аниме'}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        icon={<IconSearch />}
        rightIcon={
          searchValue.length > 0 && (
            <IconX cursor={'pointer'} onClick={clearSearch} />
          )
        }
      />
    </div>
  )
}
