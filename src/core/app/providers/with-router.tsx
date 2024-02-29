import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { SuspensePageLoader } from '@/shared/components'

export const withRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={<SuspensePageLoader />}>{component()}</Suspense>
  </BrowserRouter>
)
