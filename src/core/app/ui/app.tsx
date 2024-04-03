import { Pages } from '@/pages'

import { withProviders } from '../providers'

export const App = withProviders(() => {
  return (
    <div>
      <Pages />
    </div>
  )
})
