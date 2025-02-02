import { Screens } from '@/screens/screens'

import './global.css'
import { Providers } from './providers'

const App = () => {
  return (
    <Providers>
      <Screens />
    </Providers>
  )
}

export default App
