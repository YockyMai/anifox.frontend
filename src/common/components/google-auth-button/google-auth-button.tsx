import { Image, UnstyledButton } from '@anifox/ui'

export const GoogleAuthButton = () => {
  const handleClick = () => {
    window.location.href = 'http://localhost/api/auth/google'
  }

  return (
    <UnstyledButton
      onClick={handleClick}
      className='flex items-center justify-center gap-x-3 rounded-md bg-gray-800'
    >
      <Image src={'/brand/google.png'} width={25} height={25} />
      <p className='font-bold text-white'>Войти с Google</p>
    </UnstyledButton>
  )
}
