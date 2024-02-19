import compose from 'compose-function'
import { withReactQuery } from './with-react-query.tsx'
import { withResizeObserver } from './with-resize-observer.tsx'
import { withRouter } from './with-router.tsx'

export const withProviders = compose(
  withRouter,
  withReactQuery,
  withResizeObserver,
)
