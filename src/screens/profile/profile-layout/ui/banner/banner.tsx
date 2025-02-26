import { Image } from '@anifox/ui'
import { useInView } from 'react-intersection-observer'

import { useProfileStores } from '@/entities/profile'
import { useToggleHeaderOpacity } from '@/widgets/header'

export const Banner = () => {
  const { $profile } = useProfileStores()
  const user = $profile.selectors.user()

  const [inViewRef, isView] = useInView()

  useToggleHeaderOpacity(isView)

  return (
    <div
      ref={inViewRef}
      className='relative flex aspect-[12/2] items-end'
      style={{
        backgroundImage:
          'url(https://t3.ftcdn.net/jpg/07/32/10/90/360_F_732109080_4lXwGofazqAiysUpcCnrbflsNOl9EMdW.jpg)'
      }}
    >
      <div className='absolute top-0 h-full w-full bg-gradient-to-b from-black/0 to-black/60' />

      <div className='container z-10 flex h-fit items-end'>
        <div className='flex h-40 w-40'>
          <Image
            src={'https://avatars.githubusercontent.com/u/75245399?v=4'}
            alt='user avatar'
            className='rounded-b-none'
          />
        </div>

        <div className='flex items-end gap-x-3 px-5 pb-3'>
          <p className='text-3xl font-extrabold text-white'>
            {user?.preferred_username}
          </p>

          <div className='flex items-center gap-x-1.5'>
            <p className='font-bold text-orange-300'>Сейчас онлайн</p>
            <span className='relative flex size-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75'></span>
              <span className='relative inline-flex size-3 rounded-full bg-orange-300'></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
