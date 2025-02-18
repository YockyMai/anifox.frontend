import { Carousel } from '@anifox/ui'
import React, { useMemo } from 'react'

import {
  AnimeType,
  Genres,
  MinimalAge,
  Search,
  Status,
  Studios
} from '../anime-filters/ui'
import { AnimeOrder } from '../anime-order'

export const CarouselFilters = () => {
  // TODO: refactor
  const filters = useMemo(
    () => [
      <Search key={'search'} />,
      <AnimeType key={'anime-type'} />,
      <Genres key={'genres'} />,
      <MinimalAge key={'minimal-age'} />,
      <Status key={'status'} />,
      <Studios key={'studios'} />
    ],
    []
  )

  return (
    <Carousel
      hideButtons
      slides={[
        {
          content: (
            <div className='flex h-full w-full items-end pb-0.5 pl-1'>
              <AnimeOrder />
            </div>
          ),
          size: 40 + 12
        },
        ...filters.map((filter) => ({
          content: filter,
          size: 224 + 12
        })),
        {
          // TODO: additional filters
          content: '',
          size: 10
        }
      ]}
    />
  )
}
