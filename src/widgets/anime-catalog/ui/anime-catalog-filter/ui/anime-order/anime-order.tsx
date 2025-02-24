import { HoverCard, UnstyledButton } from '@anifox/ui'
import {
  IconFilter,
  IconSortAscending,
  IconSortDescending
} from '@tabler/icons-react'
import { clsx } from 'clsx'

import { ANIME_SORT_DIRECTION, AnimeOrderVariants } from '@/services/api'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

import { ANIME_ORDER_OPTIONS } from './anime-order.const'
import './anime-order.css'

export const AnimeOrder = () => {
  const { $filter } = useAnimeCatalogStores()

  const sort = $filter.selectors.sort()
  const order = $filter.selectors.order()

  const selectOrder = (order: AnimeOrderVariants) => {
    $filter.actions.setOrder(order)
  }

  const toggleSort = () => {
    $filter.actions.setSort(
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
