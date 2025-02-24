import { AnimeListColumnsProps } from './anime-list-columns.interface'

export const AnimeListColumns = ({ status }: AnimeListColumnsProps) => {
  return (
    <div className='flex select-none items-center justify-between py-5 pl-3'>
      <div className='flex-[7]'>
        <p className='pl-1 font-bold'>Аниме</p>
      </div>
      <div className='flex-1'>
        <p className='text-center font-bold'>Рейтинг</p>
      </div>
      <div className='flex-1'>
        <p className='text-center font-bold'>Прогресс</p>
      </div>
    </div>
  )
}
