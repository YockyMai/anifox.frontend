import { Input, Tabs, useDebounce } from '@anifox/ui'
import React, { useEffect, useState } from 'react'

import { useProfileStores } from '@/entities/profile/context'
import { FavoritesFilterView } from '@/entities/profile/store/favorites-filter'

export const FavoritesFilter = () => {
  const { $favoritesFilter } = useProfileStores()

  const search = $favoritesFilter.selectors.search()
  const view = $favoritesFilter.selectors.view()

  const [localSearch, setLocalSearch] = useState(search)

  const debouncedValue = useDebounce(localSearch, 300)

  useEffect(() => {
    $favoritesFilter.actions.setSearch(debouncedValue)
  }, [debouncedValue])

  return (
    <div>
      <Input
        label='Поиск по названию'
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </div>
  )
}
