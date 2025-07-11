import { useIsAuth } from '@/entities/viewer'
import { ViewerLastSeenUpdater } from '@/entities/viewer'
import { Screens } from '@/screens/screens'

import './global.css'
import { Providers } from './providers'

const App = () => {
  const isAuth = useIsAuth()

  return (
    <Providers>
      <Screens />

      {isAuth && <ViewerLastSeenUpdater />}
    </Providers>
  )
}

export default App
