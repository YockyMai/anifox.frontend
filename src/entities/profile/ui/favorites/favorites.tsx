import React from 'react'

import { FavoriteAnimes } from './favorite-animes/favorite-animes'
import { FavoriteCharacters } from './favorite-characters/favorite-characters'
import { FavoritesFilter } from './favorites-filter/favorites-filter'

export const Favorites = () => {
  return (
    <div className='container pt-10'>
      <FavoritesFilter />
      <div className='mt-6 grid grid-cols-2 gap-x-3'>
        <FavoriteAnimes />
        <FavoriteCharacters />
      </div>
    </div>
  )
}
