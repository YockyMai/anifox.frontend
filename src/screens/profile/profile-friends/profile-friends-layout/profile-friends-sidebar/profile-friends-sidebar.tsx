import { IconUsers, IconUserSearch, IconUsersPlus } from '@tabler/icons-react'
import clsx from 'clsx'
import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router'

import { useProfile } from '@/entities/profile'
import { ROUTES } from '@/screens/pages.routes'

export const ProfileFriendsSidebar = () => {
  const { profile, isOwner } = useProfile()
  const { pathname } = useLocation()

  const links = useMemo(() => {
    const links = [
      {
        icon: <IconUsers />,
        title: 'Друзья',
        link: ROUTES.PROFILE.FRIENDS.ROOT(profile.login)
      }
    ]

    if (isOwner) {
      links.push(
        {
          icon: <IconUserSearch />,
          title: 'Найти друзей',
          link: ROUTES.PROFILE.FRIENDS.ADD(profile.login)
        },
        {
          icon: <IconUsersPlus />,
          title: 'Заявки в друзья',
          link: ROUTES.PROFILE.FRIENDS.REQUESTS(profile.login)
        }
      )
    }

    return links
  }, [isOwner, profile.login])

  return (
    <div>
      <div className='mt-6 flex flex-col gap-y-1 rounded-lg bg-white p-2 dark:bg-slate-800'>
        {links.map(({ icon, link, title }) => {
          const isSelected = pathname === link

          return (
            <Link to={link}>
              <div
                className={clsx(
                  'flex cursor-pointer select-none items-center justify-between rounded px-3 py-1 transition-colors',
                  isSelected &&
                    'bg-slate-300/30 text-orange-400/80 dark:bg-slate-700 dark:text-orange-300'
                )}
              >
                <p className='font-semibold'>{title}</p>
                {icon}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
