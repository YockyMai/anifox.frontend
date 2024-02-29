import { Pages } from '@/pages'

import { withProviders } from '../providers'
import '../styles/global.scss'

export const App = withProviders(() => {
  return (
    <div>
      <Pages />
    </div>
  )
})
