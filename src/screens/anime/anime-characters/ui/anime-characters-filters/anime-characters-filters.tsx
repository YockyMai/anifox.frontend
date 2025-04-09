import { HoverCard, Input } from '@anifox/ui'
import { Badge } from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import React, { useState } from 'react'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'
import { CharacterRole } from '@/graphql/generated/output'

import { $animeCharactersFilterAtoms } from '../../atoms'
import './anime-characters-filters.css'

export const AnimeCharactersFilters = () => {
  const [search, setSearch] = useAtom(
    $animeCharactersFilterAtoms.search.debouncedValueAtom
  )
  const [role, setRole] = useAtom($animeCharactersFilterAtoms.role)

  const [localSearch, setLocalSearch] = useState(search)

  const handleSearchChange = (value: string) => {
    setLocalSearch(value)
    setSearch(value)
  }

  return (
    <Input
      size={UISizes.SM}
      icon={<IconSearch />}
      placeholder='Поиск'
      value={localSearch}
      onChange={(e) => handleSearchChange(e.target.value)}
      rightIcon={
        <HoverCard
          unstyled
          trigger={
            <Badge
              variant={UIVariants.LIGHT}
              color={UIColors.PURPLE}
              size={UISizes.SM}
              className='anime-characters-filters__role'
            >
              {role ? `${role} роль` : 'Любая роль'}
            </Badge>
          }
        >
          <div className='anime-characters-filters__hover-card'>
            <div>
              <p className='anime-characters-filters__title'>Фильтр по ролям</p>
            </div>
            {Object.values(CharacterRole).map((value) => (
              <div
                onClick={() => setRole(value)}
                key={value}
                className={clsx(
                  'anime-characters-filters__role-option',
                  role === value &&
                    'anime-characters-filters__role-option_selected'
                )}
              >
                <p>{value} роль</p>
              </div>
            ))}

            <div
              onClick={() => setRole(null)}
              className={clsx(
                'anime-characters-filters__role-option',
                role === null &&
                  'anime-characters-filters__role-option_selected'
              )}
            >
              <p>Любая роль</p>
            </div>
          </div>
        </HoverCard>
      }
    />
  )
}
