import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import { NavigationProgress } from '@/common/components'
import { Providers } from '@/providers'
import { Header } from '@/widgets/header'

import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Смотреть аниме в хорошем качестве',
    template: '%s | ANIFOX'
  },
  description: 'Отслеживание и отзывы'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en'>
      <body className={nunitoSans.className}>
        <Providers>
          <NavigationProgress />
          <div className='app'>
            <Header />
            <div className={'app__layout'}>
              <main>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
