import { IconBrandGithubFilled } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router'

import { Image } from '@/common/components'
import UnstyledButton from '@/common/components/unstyled-button/unstyled-button'

import { FEATURES } from './android-screen.const'

export const AndroidScreen = () => {
  return (
    <div className='container grid min-h-[calc(100vh-100px)] w-full items-center justify-center gap-x-3 max-lg:mt-[100px] max-lg:grid-rows-2 max-lg:gap-y-12 max-lg:text-center lg:grid-cols-[2fr_1fr]'>
      <div>
        <h2 className='bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-4xl font-extrabold uppercase !text-transparent'>
          Скачайте приложение для Android
        </h2>
        <p className='mt-9 text-lg'>
          ANIFOX — твой удобный помощник для просмотра и отслеживания аниме!
          Скачай ANIFOX и открой для себя мир аниме без ограничений. Удобный
          интерфейс, персональные списки, уведомления о выходе новых серий и
          многое другое — всё, что нужно для комфортного просмотра.
        </p>
        <ul className='mt-3 flex flex-col gap-y-1 py-3'>
          {FEATURES.map(({ icon: Icon, text }) => (
            <li key={text} className='flex gap-x-3'>
              <Icon className='fill-orange-300' /> {text}
            </li>
          ))}
        </ul>

        <div className='mt-5'>
          <div className='flex h-[50px] gap-2 max-lg:justify-center'>
            <Link
              target='_blank'
              to={'https://www.rustore.ru/catalog/app/club.anifox.android'}
            >
              <UnstyledButton className='h-full rounded-2xl bg-white drop-shadow-2xl'>
                <img className='h-full' src={'/rustore-logo.svg'} />
              </UnstyledButton>
            </Link>

            <Link
              target='_blank'
              to={'https://github.com/DeNyWho/AnifoxAndroid'}
            >
              <UnstyledButton className='flex h-full items-center gap-x-2 rounded-2xl bg-white px-4 drop-shadow-2xl'>
                <IconBrandGithubFilled className='text-slate-400' />
                <p className='font-bold text-black'>GitHub</p>
              </UnstyledButton>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='aspect-[9/19] h-[600px] overflow-hidden rounded-3xl border-[10px] border-slate-800 dark:border-slate-400'>
          <Image src={'/android-screenshots/home.png'} />
        </div>
      </div>
    </div>
  )
}
