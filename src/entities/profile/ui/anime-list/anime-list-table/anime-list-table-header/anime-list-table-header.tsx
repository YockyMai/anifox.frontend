import React from 'react'

import { AnimeListTableHeaderProps } from './anime-list-table-header.interface'

export const AnimeListTableHeader = ({
  status,
  dragControls
}: AnimeListTableHeaderProps) => {
  return (
    <div
      onPointerDown={(event) => dragControls.start(event)}
      className='flex cursor-grab select-none items-center justify-between py-2 pl-3 text-slate-600 transition-colors hover:bg-orange-300 hover:text-white'
    >
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
