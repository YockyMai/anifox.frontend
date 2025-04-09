import { GoogleAuthButton } from '@/common/components/google-auth-button/google-auth-button'
import { VkAuthButton } from '@/common/components/vk-auth-button/vk-auth-button'

export const AuthWithExternal = () => {
  return (
    <div className='grid grid-cols-2 gap-x-3'>
      <VkAuthButton />
      <GoogleAuthButton />
    </div>
  )
}
