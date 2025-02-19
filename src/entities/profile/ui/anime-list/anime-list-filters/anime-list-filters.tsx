import { Input, Tabs } from '@anifox/ui'
import React from 'react'

import { $animeListFilters } from '@/entities/profile/store'

import { AnimeListStatusFilter } from './anime-list-status-filter'

export const AnimeListFilters = () => {
  const search = $animeListFilters.selectors.search()

  return (
    <div className='flex gap-x-3'>
      <Input
        value={search}
        onChange={(e) => $animeListFilters.actions.setSearch(e.target.value)}
        label='Поиск по названию'
        placeholder='Поиск'
      />

      <AnimeListStatusFilter />
    </div>
  )
}
