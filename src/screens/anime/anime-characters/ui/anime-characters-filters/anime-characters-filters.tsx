'use client'

import { IconSearch } from '@tabler/icons-react'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

import { HoverCard, Input } from '@/common/components'
import Badge from '@/common/components/badge/badge'
import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { UIVariants } from '@/common/types/ui-variants'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeCharactersQuery } from '@/services/queries'

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

  const { animeUrl } = useParams<AnimePageParams>()

  const { data } = useAnimeCharactersQuery({
    animeUrl,
    search
  })

  const availableRoles = data?.pages[0].availableRoles

  return (
    <Input
      size='sm'
      icon={<IconSearch />}
      placeholder='Поиск по названию'
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
            {availableRoles &&
              availableRoles.map((value) => (
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
