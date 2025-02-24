import { Link } from 'react-router'

import { AnimeInfoBlockProps } from './anime-info-block.interface'

export const AnimeInfoBlock = ({ infos, title }: AnimeInfoBlockProps) => {
  return (
    <div className='flex w-fit flex-nowrap items-center gap-3 rounded bg-slate-100 p-3 shadow-2xl backdrop-blur-sm dark:bg-gray-900 max-lg:flex-grow'>
      <p className='text-sm'>{title}</p>

      <div className='flex flex-1 flex-wrap items-center gap-1.5'>
        {infos.map(({ element, href, key }, index) =>
          href ? (
            <Link
              to={href}
              key={key ?? index}
              className='flex-grow cursor-pointer whitespace-nowrap rounded bg-slate-200 px-3 py-1 text-center text-xs font-medium transition-colors hover:bg-slate-300 dark:bg-slate-800/80 dark:text-slate-200 hover:dark:bg-slate-800'
            >
              {element}
            </Link>
          ) : (
            <div
              key={key ?? index}
              className='flex-grow whitespace-nowrap rounded bg-slate-200 px-3 py-1 text-center text-xs font-medium transition-colors hover:bg-slate-300 dark:bg-slate-800/80 dark:text-slate-200 hover:dark:bg-slate-800'
            >
              {element}
            </div>
          )
        )}
      </div>
    </div>
  )
}
