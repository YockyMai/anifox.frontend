import { Image, UnstyledButton } from '@anifox/ui'
import React from 'react'

export const ShikimoriAuthButton = () => {
  const handleClick = () => {
    window.location.href = `https://shikimori.one/oauth/authorize?client_id=E9EgRXqEFcb2UDgYZpzwKv_IuJYW6StUcFhQe8OK-RY&redirect_uri=${import.meta.env.VITE_PUBLIC_API_URL}/auth/shikimori/callback&response_type=code&scope=`
  }

  return (
    <UnstyledButton
      onClick={handleClick}
      className='flex h-11 items-center justify-center gap-x-3 rounded-md bg-gray-800 dark:bg-slate-900'
    >
      <Image
        src='https://shikimori.one/assets/layouts/l-top_menu-v2/glyph.svg'
        width={25}
        height={25}
      />
      <p className='font-bold text-white'>Войти с Shikimori</p>
    </UnstyledButton>
  )
}
