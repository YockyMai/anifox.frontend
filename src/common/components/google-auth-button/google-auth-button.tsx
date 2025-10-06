import { Image, UnstyledButton } from '@anifox/ui'

export const GoogleAuthButton = () => {
  const handleClick = () => {
    window.location.href = `${import.meta.env.VITE_PUBLIC_API_URL}/auth/google`
  }

  return (
    <UnstyledButton
      onClick={handleClick}
      className='flex h-11 items-center justify-center gap-x-3 rounded-md bg-gray-800 dark:bg-slate-900'
    >
      <Image src={'/brand/google.png'} width={25} height={25} />
      <p className='font-bold text-white'>Войти с Google</p>
    </UnstyledButton>
  )
}
