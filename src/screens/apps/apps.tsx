import { AndroidScreen } from './android-screen'
import { WindowsScreen } from './windows-screen'

export const AppsScreen = () => {
  return (
    <div className='apps'>
      <AndroidScreen />

      <WindowsScreen />
    </div>
  )
}
