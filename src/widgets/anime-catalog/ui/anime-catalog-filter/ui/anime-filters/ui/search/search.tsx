import { Input, useDebounce } from '@anifox/ui'
import { IconSearch, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

export const Search = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()

  const search = $filter.selectors.search()

  const [localSearch, setLocalSearch] = useState(search)

  useEffect(() => {
    setLocalSearch(search)
  }, [search])

  const debouncedValue = useDebounce(localSearch, 300)

  useEffect(() => {
    $filter.actions.setSearch(debouncedValue)

    if (debouncedValue !== '') {
      changeSearchParams({ search: debouncedValue })
    }
  }, [debouncedValue])

  const clearSearch = () => {
    $filter.actions.setSearch('')
    changeSearchParams({ search: '' })
  }

  return (
    <div className='-mt-1'>
      <Input
        className='placeholder:text-current'
        maxLength={40}
        label={'Поиск'}
        placeholder={'Название аниме'}
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        icon={<IconSearch />}
        rightIcon={
          localSearch.length > 0 && (
            <IconX cursor={'pointer'} onClick={clearSearch} />
          )
        }
      />
    </div>
  )
}
