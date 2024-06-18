import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import { Providers } from '@/providers'
import { Header } from '@/widgets/header'

import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ANIFOX | Смотреть аниме в хорошем качестве',
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
          <Header />
          <div className={'main-layout__content'}>
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
