import { ScreenSection } from '@anifox/ui'
import clsx from 'clsx'
import { Outlet } from 'react-router'

import { useProfile } from '@/entities/profile'

import { ProfileFriendsSidebar } from './profile-friends-sidebar/profile-friends-sidebar'

export const ProfileFriendsLayout = () => {
  const { isOwner } = useProfile()

  return (
    <ScreenSection withContainer>
      <div className='mt-6'>
        <div
          className={clsx(
            isOwner && 'gap-x-12 xl:grid xl:grid-cols-[250px_auto]'
          )}
        >
          {isOwner && <ProfileFriendsSidebar />}
          <div className='xl:-mt-3'>
            <Outlet />
          </div>
        </div>
      </div>
    </ScreenSection>
  )
}
