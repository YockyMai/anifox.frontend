import { Button, Image, UnstyledButton } from '@anifox/ui'
import { IconBell, IconLogout, IconSettings } from '@tabler/icons-react'
import clsx from 'clsx'
import { useMemo } from 'react'
import { Link } from 'react-router'

import { DEFAULT_USER_AVATAR } from '@/entities/user'
import { $viewer } from '@/entities/viewer'

export const UserDropdown = () => {
  const viewer = $viewer.selectors.viewer()!

  const links = useMemo(() => {
    return [
      {
        icon: <IconSettings />,
        title: 'Настройки',
        link: ''
      },
      {
        icon: <IconBell />,
        title: 'Уведомления',
        link: ''
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

      <div className='flex flex-col gap-y-1 rounded-lg bg-slate-100 p-2 dark:bg-slate-900'>
        {links.map(({ icon, link, title }) => {
          return (
            <Link to={link}>
              <div
                className={clsx(
                  'flex cursor-pointer select-none items-center justify-between rounded px-3 py-1 transition-colors hover:bg-slate-200 hover:dark:bg-slate-800'
                )}
              >
                <p className='text-sm font-semibold'>{title}</p>
                {icon}
              </div>
            </Link>
          )
        })}
      </div>

      <Button
        icon={<IconLogout />}
        variant='light'
        color='red'
        fullWidth
        size='sm'
      >
        Выйти с аккаунта
      </Button>
    </div>
  )
}
