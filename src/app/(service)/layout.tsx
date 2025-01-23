import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { NavigationProgress } from '@/common/components'
import { YMLoader } from '@/common/lib/ym'
import { Providers } from '@/providers'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import { initThemeScript } from '../@lib/init-theme-script'
import '../global.css'
import './page.css'

const nunitoSans = Nunito({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: {
    default: 'ANIFOX | Смотри, отслеживай и наслаждайся любимыми аниме онлайн!',
    template: 'ANIFOX | %s'
  },
  description:
    'ANIFOX — Твой помощник в мире аниме! Здесь ты можешь смотреть любимые тайтлы в отличном качестве, отслеживать свой прогресс, составлять свои списки и делиться оценками с друзьями.'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='ru' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initThemeScript }} />
      </head>
      <body className={nunitoSans.className}>
        <YMLoader />
        <Providers>
          <NavigationProgress />
          <div className='app'>
            <Header />
            <div className='app__layout'>
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
