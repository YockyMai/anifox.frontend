import { HoverCard, UnstyledButton } from '@anifox/ui'
import {
  IconFilter,
  IconSortAscending,
  IconSortDescending
} from '@tabler/icons-react'
import { clsx } from 'clsx'

import {
  AnimeOrder as AnimeOrderVariants,
  SortOrder
} from '@/graphql/generated/output'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

import './anime-order.css'

export const AnimeOrder = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()

  const sort = $filter.selectors.sort()
  const order = $filter.selectors.order()

  const selectOrder = (order: AnimeOrderVariants) => {
    $filter.actions.setOrder(order)
    changeSearchParams({ order })
  }

  const toggleSort = () => {
    $filter.actions.setSort(
      sort === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC
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
              {sort === SortOrder.ASC ? (
                <IconSortDescending />
              ) : (
                <IconSortAscending />
              )}
            </UnstyledButton>
          </div>
        </div>
        <div />
        {Object.values(AnimeOrderVariants).map((orderOption) => (
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
