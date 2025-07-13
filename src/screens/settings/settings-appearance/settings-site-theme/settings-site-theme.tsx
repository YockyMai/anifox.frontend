import { HoverIcon, Image, UnstyledButton } from '@anifox/ui'
import clsx from 'clsx'
import { useAtom } from 'jotai'

import { $siteThemeAtom } from '@/common/store/site-theme'
import { SITE_THEME } from '@/common/types/site-theme'

const ThemeButton = ({
  isActive,
  themeImageSrc,
  onClick,
  hint
}: {
  themeImageSrc: string
  isActive: boolean
  onClick?: () => void
  hint: string
}) => {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-xl drop-shadow transition-all',
        isActive && 'scale-105 ring-4 ring-orange-300'
      )}
    >
      <HoverIcon
        icon={
          <div>
            <p className='text-center text-white'>{hint}</p>
          </div>
        }
      >
        <UnstyledButton onClick={onClick} className='w-full'>
          <Image
            src={themeImageSrc}
            className='aspect-video w-full scale-105'
            height={300}
          />
        </UnstyledButton>
      </HoverIcon>
    </div>
  )
}

export const SettingsSiteTheme = () => {
  const [theme, setTheme] = useAtom($siteThemeAtom)

  return (
    <div className='mt-6 grid grid-cols-2 gap-x-8'>
      <ThemeButton
        hint='Светлая тема'
        onClick={() => setTheme(SITE_THEME.LIGHT)}
        themeImageSrc='/theme/light.jpg'
        isActive={theme === 'light'}
      />
      <ThemeButton
        hint='Темная тема'
        onClick={() => setTheme(SITE_THEME.DARK)}
        themeImageSrc='/theme/dark.jpg'
        isActive={theme === 'dark'}
      />
    </div>
  )
}
