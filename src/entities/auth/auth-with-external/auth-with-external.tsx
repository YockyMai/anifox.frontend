import { ShikimoriAuthButton } from '@/common/components'
import { GoogleAuthButton } from '@/common/components/google-auth-button/google-auth-button'
import { VkAuthButton } from '@/common/components/vk-auth-button/vk-auth-button'

export const AuthWithExternal = () => {
  return (
    <div className='mt-8'>
      <div className='grid grid-cols-2 gap-x-3 gap-y-3'>
        <ShikimoriAuthButton />
        <GoogleAuthButton />
      </div>
      <div className='mt-3'>
        <VkAuthButton />
      </div>
    </div>
  )
}
