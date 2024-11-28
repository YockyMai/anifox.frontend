import {
  IconBrandAndroid,
  IconBrandTelegram,
  IconBrandVk,
  IconBrandWindows
} from '@tabler/icons-react'
import Link from 'next/link'

import { AnifoxLogo, Button } from '@/common/components'
import { ROUTES } from '@/screens/pages.routes'

import './footer.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <div>
            <Link href={ROUTES.HOME}>
              <AnifoxLogo withoutText />
            </Link>
            <Link href={ROUTES.HOME}>
              <AnifoxLogo withoutImage />
            </Link>
          </div>
          <p>© anifox.club 2023 - current time</p>
        </div>
        <div className='footer__right'>
          <div className='footer__category'>
            <p className='footer__category__title'>Соцсети</p>
            <div className='footer__category__content'>
              <Link target='_blank' href='https://t.me/anifoxclub'>
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
              <Link target='_blank' href='https://vk.com/anifox.club'>
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

          <div className='footer__category'>
            <p className='footer__category__title'>Приложения</p>
            <div className='footer__category__content'>
              <Link href={ROUTES.APPS.ANDROID}>
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
              <Link href='#'>
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
