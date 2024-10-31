import './kodik-player-header.css'
import { Episodes, Translations } from './ui'

export const KodikPlayerHeader = () => {
  return (
    <div className='kodik-player__header'>
      <div className='kodik-player__header__selectors'>
        <Episodes />
        <Translations />
      </div>
    </div>
  )
}
