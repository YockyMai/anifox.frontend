import { AnifoxLogo, Button } from '@anifox/ui'
import {
  IconBrandAndroid,
  IconBrandTelegram,
  IconBrandVk,
  IconBrandWindows
} from '@tabler/icons-react'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-16 bg-slate-200 py-5 dark:bg-slate-800'>
      <div className='container flex flex-wrap justify-between'>
        <div className='flex flex-col justify-between'>
          <div>
            <Link to={ROUTES.HOME}>
              <AnifoxLogo withoutText />
            </Link>
            <Link to={ROUTES.HOME}>
              <AnifoxLogo withoutImage />
            </Link>
          </div>

          <div>
            <Link className='font-normal' to={ROUTES.RIGHT_HOLDERS}>
              Для правообладателей
            </Link>
            <p>© anifox.club 2023 - {currentYear}</p>
          </div>
        </div>
        <div className='mt-6 flex w-full justify-center gap-x-10 md:w-fit md:justify-normal'>
          <div>
            <p className='mb-4'>Соцсети</p>
            <div className='flex flex-col flex-wrap gap-y-3'>
              <Link target='_blank' to='https://t.me/anifoxclub'>
                <Button
                  fullWidth
                  size='sm'
                  color='orange'
                  variant='filled'
                  icon={<IconBrandTelegram />}
                  radius='xxl'
                >
                  Телеграм
                </Button>
              </Link>
              <Link target='_blank' to='https://vk.com/anifox.club'>
                <Button
                  fullWidth
                  size='sm'
                  color='orange'
                  variant='filled'
                  icon={<IconBrandVk />}
                  radius='xxl'
                >
                  Вконтакте
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <p className='mb-4'>Приложения</p>
            <div className='flex flex-col flex-wrap gap-y-3'>
              <Link to={ROUTES.APPS.ANDROID}>
                <Button
                  fullWidth
                  size='sm'
                  color='orange'
                  variant='filled'
                  icon={<IconBrandAndroid />}
                  radius='xxl'
                >
                  Android
                </Button>
              </Link>
              <Link to={ROUTES.APPS.WINDOWS}>
                <Button
                  fullWidth
                  size='sm'
                  color='orange'
                  variant='filled'
                  icon={<IconBrandWindows />}
                  radius='xxl'
                >
                  Windows
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
