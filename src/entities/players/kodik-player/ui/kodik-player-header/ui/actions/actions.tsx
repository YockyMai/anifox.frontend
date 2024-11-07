import './actions.css'
import { ToggleWideMode } from './toggle-wide-mode'

export const Actions = () => {
  return (
    <div className='kodik-player-header__bars'>
      <ToggleWideMode />
    </div>
  )
}
