import { Pages } from '@/pages'

import { withProviders } from '../providers'
import './app.css'

export const App = withProviders(() => {
  return (
    <div>
      <Pages />
    </div>
  )
})
