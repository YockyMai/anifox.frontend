import { AndroidScreen } from './android-screen'
import { AppsMetadata } from './apps.metadata'
import { WindowsScreen } from './windows-screen'

export const AppsScreen = () => {
  return (
    <div className='apps'>
      <AppsMetadata />

      <AndroidScreen />
      <WindowsScreen />
    </div>
  )
}
