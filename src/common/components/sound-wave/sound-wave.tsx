import clsx from 'clsx'

import './sound-wave.css'

export const SoundWave = () => {
  return (
    <div className='sound-wave'>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={clsx('sound-wave__bar', `sound-wave__bar_${index + 1}`)}
        />
      ))}
    </div>
  )
}
