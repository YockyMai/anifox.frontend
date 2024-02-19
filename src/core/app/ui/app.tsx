import { Routing } from '@/pages'
import { withProviders } from '../providers'
import '../styles/global.scss'
import './app.styles.scss'

export const App = withProviders(() => {
  return (
    <div className={'app'}>
      <Routing />
    </div>
  )
})

