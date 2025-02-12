import { IconBrandWindows, IconChevronDown } from '@tabler/icons-react'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

import { UnstyledButton } from '@/common/components'

import { SCREENS } from '../apps.const'

export const WindowsScreen = () => {
  const windowsContentRef = useRef<HTMLDivElement>(null)

  const location = useLocation()

  const scrollToWindowsScreen = () => {
    windowsContentRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (windowsContentRef.current && location.hash === `#${SCREENS.WINDOWS}`) {
      scrollToWindowsScreen()
    }
  }, [location.hash, windowsContentRef.current])

  return (
    <div className='max-lg:mt-12'>
      <div className='flex justify-center'>
        <UnstyledButton
          onClick={scrollToWindowsScreen}
          className='flex flex-col items-center justify-center gap-y-3 text-purple-400 transition-colors'
        >
          <p className='text-lg font-extrabold uppercase'>Windows</p>
          <IconChevronDown className='animate-bounce' size={48} />
        </UnstyledButton>
      </div>

      <div
        className='flex min-h-screen items-center justify-center'
        ref={windowsContentRef}
      >
        <div className='flex flex-col items-center gap-y-4'>
          <IconBrandWindows className='stroke-blue-500' size={58} />
          <p className='text-lg'>Приложение для Windows еще в разработке.</p>
        </div>
      </div>
    </div>
  )
}
