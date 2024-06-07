import { Tooltip, UnstyledButton } from '@anifox/ui'
import {
  IconFilter,
  IconSortAscending,
  IconSortDescending
} from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useStore } from 'zustand'

import { AnimeOrderVariants } from '@/services/api'
import { $animeCatalogFilterModel } from '@/widgets/anime-catalog/model/anime-catalog-filter'
import { ANIME_SORT_DIRECTION } from '@/widgets/anime-catalog/model/anime-catalog-filter/anime-catalog-filter.const'

import { ANIME_ORDER_OPTIONS } from './anime-order.const'
import './anime-order.css'

export const AnimeOrder = () => {
  const order = useStore($animeCatalogFilterModel.store, (state) => state.order)
  const sort = useStore($animeCatalogFilterModel.store, (state) => state.sort)

  const selectOrder = (order: AnimeOrderVariants) => {
    $animeCatalogFilterModel.actions.setOrder(order)
  }

  const toggleSort = () => {
    $animeCatalogFilterModel.actions.setSort(
      sort === ANIME_SORT_DIRECTION.ASC
        ? ANIME_SORT_DIRECTION.DESC
        : ANIME_SORT_DIRECTION.ASC
    )
  }

  return (
    <Tooltip
      unstyled
      position='bottom'
      withoutArrow
      label={
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
      }
    >
      <UnstyledButton className='anime-order'>
        <IconFilter />
      </UnstyledButton>
    </Tooltip>
  )
}
