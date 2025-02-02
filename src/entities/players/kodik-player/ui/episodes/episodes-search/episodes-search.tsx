import { IconSearch } from '@tabler/icons-react'
import { useAtom } from 'jotai'
import { useState } from 'react'

import { Input } from '@/common/components'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'

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
      radius='none'
      icon={<IconSearch />}
      value={localSearch}
      onChange={(e) => handleSearchChange(e.currentTarget.value)}
      variant={UIVariants.LIGHT}
      size={UISizes.SM}
      placeholder='Поиск по названию или номеру серии'
    />
  )
}
