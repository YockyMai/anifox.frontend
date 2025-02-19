import React from 'react'

import { AnimeListColumnsProps } from './anime-list-columns.interface'

export const AnimeListColumns = ({ status }: AnimeListColumnsProps) => {
  return (
    <div className='flex select-none items-center justify-between bg-orange-300 py-2 pl-3 text-white transition-colors'>
      <div className='flex-[7]'>
        <p className='pl-1 font-bold'>Аниме</p>
      </div>
      <div className='flex w-[50px] flex-none py-5' />
      <div className='flex-1'>
        <p className='font-bold'>Рейтинг</p>
      </div>
      <div className='flex-1'>
        <p className='font-bold'>Прогресс</p>
      </div>
    </div>
  )
}
