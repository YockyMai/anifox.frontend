import { Input, useDebounce } from '@anifox/ui'
import { IconSearch, IconX } from '@tabler/icons-react'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import './search.css'

export const Search = () => {
  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const [search, setSearch] = useAtom($animeCatalogFilterAtoms.search)

  const [searchValue, setSearchValue] = useState(search)

  useEffect(() => {
    setSearchValue(search)
  }, [search])

  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    setSearch(debouncedValue)
    if (debouncedValue) {
      changeSearchParams({ search: debouncedValue })
    }
  }, [changeSearchParams, debouncedValue, setSearch])

  const clearSearch = () => {
    setSearch('')
    changeSearchParams({ search: '' })
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
