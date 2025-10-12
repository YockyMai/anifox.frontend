import { Image } from '@anifox/ui'
import { useInView } from 'react-intersection-observer'

import { useProfile } from '@/entities/profile'
import { DEFAULT_USER_BANNER, UserLastSeenInfo } from '@/entities/user'
import { useToggleHeaderOpacity } from '@/widgets/header'

export const Banner = () => {
  const { profile } = useProfile()

  const [inViewRef, isView] = useInView()

  useToggleHeaderOpacity(isView)

  return (
    <div
      ref={inViewRef}
      className='relative flex h-[250px] items-end bg-cover bg-center bg-no-repeat sm:h-[330px]'
      style={{
        backgroundImage: `url(${profile.banner ?? DEFAULT_USER_BANNER})`
      }}
    >
      <div className='absolute top-0 h-full w-full bg-gradient-to-b from-black/0 to-black/60' />

      <div className='container z-10 flex h-fit items-end'>
        <div className='flex aspect-square h-28 sm:h-40'>
          <Image
            src={
              profile?.avatar ??
              'https://avatars.githubusercontent.com/u/75245399?v=4'
            }
            alt='user avatar'
            className='h-full w-full rounded-b-none'
          />
        </div>

        <div className='flex flex-wrap items-end gap-x-3 px-5 pb-3'>
          <p className='text-xl font-extrabold text-white sm:text-3xl'>
            {profile?.name ?? profile?.login}
          </p>

          <UserLastSeenInfo
            isOnline={profile.isOnline}
            lastSeen={profile.lastSeen}
          />
        </div>
      </div>
    </div>
  )
}
