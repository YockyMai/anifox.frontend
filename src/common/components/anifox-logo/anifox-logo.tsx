import Image from 'next/image'

import './anifox-logo.css'

export const AnifoxLogo = () => {
  return (
    <div className='anifox-logo'>
      <Image
        alt='Anifox logo'
        src={'/anifox-logo.webp'}
        className='anifox-logo__image'
        width={40}
        height={40}
      />
      <div className='anifox-logo__text'>
        <p>Ani</p>
        <p>Fox</p>
      </div>
    </div>
  )
}
