import clsx from 'clsx'
import { Fragment, useMemo } from 'react'
import { Link } from 'react-router'

import { MenuListGroup, MenuListProps } from './menu-list.interface'

export const MenuList = ({
  items,
  selectedItemId,
  theme = 'default',
  size = 'md'
}: MenuListProps) => {
  const normalizedItems = useMemo<MenuListGroup[]>(() => {
    if ('items' in items[0]) {
      return items as MenuListGroup[]
    } else {
      return [
        {
          items
        }
      ] as MenuListGroup[]
    }
  }, [items])

  return (
    <div className='flex flex-col gap-y-2'>
      {normalizedItems.map(({ items, title }) => (
        <div className='flex flex-col gap-y-1' key={title}>
          <p className='font-semibold'>{title}</p>
          <div
            className={clsx(
              'flex flex-col gap-y-1 rounded-lg p-2',
              theme === 'darker'
                ? 'bg-slate-100 dark:bg-slate-900'
                : 'bg-white dark:bg-slate-800'
            )}
          >
            {items.map(({ icon, link, title, id }) => {
              const content = (
                <div
                  className={clsx(
                    'flex cursor-pointer select-none items-center justify-between rounded px-3 py-1 transition-colors',
                    theme === 'darker'
                      ? 'hover:bg-slate-200 hover:dark:bg-slate-800'
                      : 'hover:bg-slate-100 hover:dark:bg-slate-700',
                    selectedItemId === id &&
                      (theme === 'darker'
                        ? 'bg-slate-200 dark:bg-slate-800'
                        : 'bg-slate-300/30 text-orange-400/80 dark:bg-slate-700 dark:text-orange-300')
                  )}
                >
                  <p
                    className={clsx(
                      'font-semibold',
                      size === 'sm' && 'text-sm'
                    )}
                  >
                    {title}
                  </p>
                  {icon}
                </div>
              )

              return (
                <Fragment key={id}>
                  {link ? <Link to={link}>{content}</Link> : content}
                </Fragment>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
