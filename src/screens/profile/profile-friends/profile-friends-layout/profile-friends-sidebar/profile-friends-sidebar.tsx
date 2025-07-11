import { IconUsers, IconUserSearch, IconUsersPlus } from '@tabler/icons-react'
import React, { useMemo } from 'react'
import { useLocation } from 'react-router'

import { MenuList } from '@/common/components'
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
        link: ROUTES.PROFILE.FRIENDS.ROOT(profile.login),
        id: ROUTES.PROFILE.FRIENDS.ROOT(profile.login)
      }
    ]

    if (isOwner) {
      links.push(
        {
          icon: <IconUserSearch />,
          title: 'Найти друзей',
          link: ROUTES.PROFILE.FRIENDS.ADD(profile.login),
          id: ROUTES.PROFILE.FRIENDS.ADD(profile.login)
        },
        {
          icon: <IconUsersPlus />,
          title: 'Заявки в друзья',
          link: ROUTES.PROFILE.FRIENDS.REQUESTS(profile.login),
          id: ROUTES.PROFILE.FRIENDS.REQUESTS(profile.login)
        }
      )
    }

    return links
  }, [isOwner, profile.login])

  return (
    <MenuList
      selectedItemId={links.find(({ link }) => link === pathname)?.id}
      items={links}
    />
  )
}
