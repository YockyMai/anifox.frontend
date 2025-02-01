import { Metadata } from 'next'

import { RightHolders } from '@/screens/right-holders'

import './page.css'

export const metadata: Metadata = {
  title: 'Для правообладателей',
  description:
    'Информация о деятельности сайта, авторских правах и полученных материалах'
}

const Page = () => {
  return <RightHolders />
}

export default Page
