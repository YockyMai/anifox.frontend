'use client'

import { IconSearch } from '@tabler/icons-react'
import { useAtom } from 'jotai'
import { useState } from 'react'

import { Input } from '@/common/components'

import { $episodesFilterAtoms } from '../episodes-list/atoms'

export const EpisodesSearch = () => {
  const [search, setSearch] = useAtom(
    $episodesFilterAtoms.search.debouncedValueAtom
  )

  const [localSearch, setLocalSearch] = useState(search)

  const handleSearchChange = (value: string) => {
    setLocalSearch(value)
    setSearch(value)
  }

  return (
    <Input
      style={{ height: 50 }}
      customColors={{
        inputBgColor: 'transparent'
      }}
      icon={<IconSearch />}
      value={localSearch}
      onChange={(e) => handleSearchChange(e.currentTarget.value)}
      variant='light'
      size='sm'
      placeholder='Поиск по названию или номеру серии'
    />
  )
}
