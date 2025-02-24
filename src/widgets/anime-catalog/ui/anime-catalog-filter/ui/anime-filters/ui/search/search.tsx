import { Input, useDebounce } from '@anifox/ui'
import { IconSearch, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

export const Search = () => {
  const { $filter } = useAnimeCatalogStores()

  const search = $filter.selectors.search()

  const [searchValue, setSearchValue] = useState(search)

  useEffect(() => {
    setSearchValue(search)
  }, [search])

  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    $filter.actions.setSearch(debouncedValue)
  }, [debouncedValue])

  const clearSearch = () => {
    $filter.actions.setSearch('')
  }

  return (
    <div className='-mt-1'>
      <Input
        className='placeholder:text-current'
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
