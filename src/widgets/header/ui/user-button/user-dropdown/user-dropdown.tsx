import { Button, Image, UnstyledButton } from '@anifox/ui'
import { IconBell, IconLogout, IconSettings } from '@tabler/icons-react'
import { useMemo } from 'react'
import { Link } from 'react-router'

import { MenuList } from '@/common/components'
import { DEFAULT_USER_AVATAR } from '@/entities/user'
import { $viewer } from '@/entities/viewer'

export const UserDropdown = () => {
  const viewer = $viewer.selectors.viewer()!

  const links = useMemo(() => {
    return [
      {
        icon: <IconSettings />,
        title: 'Настройки',
        link: '',
        id: 'settings'
      },
      {
        icon: <IconBell />,
        title: 'Уведомления',
        link: '',
        id: 'settings'
      }
    ]
  }, [])

  return (
    <div className='flex w-[300px] flex-col gap-y-3 rounded bg-white p-3 shadow-xl shadow-slate-800/10 dark:bg-slate-800'>
      <UnstyledButton>
        <Link to={`/profile/${viewer.login}`}>
          <div className='flex items-center gap-x-3 rounded bg-slate-200 p-3 dark:bg-slate-900'>
            <Image
              className='h-12 w-12'
              src={viewer.avatar ?? DEFAULT_USER_AVATAR}
            />
            <div className='flex flex-col text-left'>
              <p className='text-lg font-bold text-slate-600 dark:text-white'>
                {viewer.name}
              </p>
              <p className='text-xs'>@{viewer.login}</p>
            </div>
          </div>
        </Link>
      </UnstyledButton>

      <MenuList theme='darker' items={links} />

      <Button
        icon={<IconLogout />}
        variant='light'
        color='red'
        fullWidth
        size='sm'
        onClick={() => $viewer.actions.logout()}
      >
        Выйти с аккаунта
      </Button>
    </div>
  )
}
