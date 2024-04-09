import { ReactNode, useEffect } from 'react'

import { $resizeModel } from '@/shared/store/resize'

export const withResizeObserver = (component: () => ReactNode) => () => {
  useEffect(() => {
    const handleResize = () => {
      $resizeModel.actions.onChangeWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <>{component()}</>
}
