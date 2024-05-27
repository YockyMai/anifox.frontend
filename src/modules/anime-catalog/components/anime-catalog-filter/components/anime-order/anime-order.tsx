import { Tooltip, UnstyledButton } from '@anifox/ui'
import { IconFilter } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useStore } from 'zustand'

import { $animeCatalogFilterModel } from '@/modules/anime-catalog/model/anime-catalog-filter'
import { AnimeOrderVariants } from '@/services/api'

import { ANIME_ORDER_OPTIONS } from './anime-order.const'
import './anime-order.css'

export const AnimeOrder = () => {
  const order = useStore(
    $animeCatalogFilterModel.store,
    (state) => state.orderBy
  )

  const selectOrder = (order: AnimeOrderVariants) => {
    $animeCatalogFilterModel.actions.setOrderBy(order)
  }

  return (
    <Tooltip
      position='bottom'
      withoutArrow
      label={
        <div className='anime-sort__dropdown'>
          {Object.values(ANIME_ORDER_OPTIONS).map((orderOption) => (
            <UnstyledButton
              onClick={() => selectOrder(orderOption)}
              className={clsx(
                'anime-sort__dropdown__option',
                orderOption === order && 'anime-sort__dropdown__option_active'
              )}
              key={orderOption}
            >
              <p>{orderOption}</p>
            </UnstyledButton>
          ))}
        </div>
      }
    >
      <UnstyledButton className='anime-sort'>
        <IconFilter />
      </UnstyledButton>
    </Tooltip>
  )
}
