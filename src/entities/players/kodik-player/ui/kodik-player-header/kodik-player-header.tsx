import './kodik-player-header.css'
import { Episodes } from './ui/episodes/episodes'
import { Translations } from './ui/translations/translations'

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
