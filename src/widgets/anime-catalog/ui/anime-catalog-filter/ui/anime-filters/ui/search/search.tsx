'use client'

import { useDebounce } from '@anifox/hooks'
import { Input } from '@anifox/ui'
import { IconSearch, IconX } from '@tabler/icons-react'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import './search.css'

export const Search = () => {
  const [search, setSearch] = useAtom($animeCatalogFilterAtoms.search)

  const [searchValue, setSearchValue] = useState(search)
  useEffect(() => {
    setSearchValue(search)
  }, [search])

  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    setSearch(debouncedValue)
  }, [debouncedValue, setSearch])

  const clearSearch = () => {
    setSearch('')
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
