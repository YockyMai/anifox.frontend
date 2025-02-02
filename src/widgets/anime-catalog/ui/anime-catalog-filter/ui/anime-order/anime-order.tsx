import {
  IconFilter,
  IconSortAscending,
  IconSortDescending
} from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useAtom } from 'jotai'

import { HoverCard, UnstyledButton } from '@/common/components'
import { ANIME_SORT_DIRECTION, AnimeOrderVariants } from '@/services/api'
import { useAnimeCatalogFilterContext } from '@/widgets/anime-catalog/context/anime-catalog-filter.context'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model/anime-catalog-filter'

import { ANIME_ORDER_OPTIONS } from './anime-order.const'
import './anime-order.css'

export const AnimeOrder = () => {
  const [order, setOrder] = useAtom($animeCatalogFilterAtoms.order)
  const [sort, setSort] = useAtom($animeCatalogFilterAtoms.sort)

  const { changeSearchParams } = useAnimeCatalogFilterContext()

  const selectOrder = (order: AnimeOrderVariants) => {
    setOrder(order)
    changeSearchParams({ order })
  }

  const toggleSort = () => {
    setSort(
      sort === ANIME_SORT_DIRECTION.ASC
        ? ANIME_SORT_DIRECTION.DESC
        : ANIME_SORT_DIRECTION.ASC
    )
  }

  return (
    <HoverCard
      unstyled
      position='bottom'
      withoutArrow
      trigger={
        <UnstyledButton className='anime-order'>
          <IconFilter />
        </UnstyledButton>
      }
    >
      <div className='anime-order__dropdown'>
        <div className='anime-order__dropdown__header'>
          <p>Сортировать</p>
          <div className='anime-order__dropdown__sort'>
            <UnstyledButton
              className='anime-order__dropdown__sort__icon'
              onClick={toggleSort}
            >
              {sort === ANIME_SORT_DIRECTION.ASC ? (
                <IconSortDescending />
              ) : (
                <IconSortAscending />
              )}
            </UnstyledButton>
          </div>
        </div>
        <div />
        {Object.values(ANIME_ORDER_OPTIONS).map((orderOption) => (
          <UnstyledButton
            onClick={() => selectOrder(orderOption)}
            className={clsx(
              'anime-order__dropdown__option',
              orderOption === order && 'anime-order__dropdown__option_active'
            )}
            key={orderOption}
          >
            <p>{orderOption}</p>
          </UnstyledButton>
        ))}
      </div>
    </HoverCard>
  )
}
