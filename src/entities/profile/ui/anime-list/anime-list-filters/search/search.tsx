import { Input } from '@anifox/ui'
import { IconSearch, IconX } from '@tabler/icons-react'

import { $animeListFilters } from '@/entities/profile/store'

export const Search = () => {
  const search = $animeListFilters.selectors.search()

  return (
    <Input
      value={search}
      onChange={(e) => $animeListFilters.actions.setSearch(e.target.value)}
      label='Поиск по названию'
      placeholder='Поиск'
      icon={
        <IconSearch
          className='cursor-pointer'
          onClick={() => $animeListFilters.actions.setSearch('')}
        />
      }
      rightIcon={search.length ? <IconX /> : undefined}
    />
  )
}
