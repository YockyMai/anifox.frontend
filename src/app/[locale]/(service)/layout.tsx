import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { Suspense } from 'react'

import { NavigationProgress } from '@/common/components'
import { YMLoader } from '@/common/lib/ym'
import { Locale } from '@/i18n/types'
import { Providers } from '@/providers'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import { initThemeScript } from '../../@lib/init-theme-script'
import '../../global.css'
import Loading from './loading'
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

const RootLayout = async ({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initThemeScript }} />
      </head>
      <body className={nunitoSans.className}>
        <YMLoader />
        <Providers locale={locale}>
          <NavigationProgress />
          <div className='app'>
            <Header />
            <div className='app__layout'>
              <main>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
