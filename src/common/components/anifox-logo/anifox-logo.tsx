import { Image } from '@/common/components'

import './anifox-logo.css'
import { AnifoxLogoProps } from './anifox-logo.interface'

export const AnifoxLogo = ({ withoutImage, withoutText }: AnifoxLogoProps) => {
  return (
    <div className='anifox-logo'>
      {!withoutImage && (
        <Image
          alt='Logo'
          src={'/anifox-logo.webp'}
          className='anifox-logo__image'
          width={40}
          height={40}
        />
      )}

      {!withoutText && (
        <div className='anifox-logo__text'>
          <p>Ani</p>
          <p>Fox</p>
        </div>
      )}
    </div>
  )
}
