import { ReactNode, useEffect } from 'react'
import { resizeHandlers } from '@/shared/hooks'

export const withResizeObserver = (component: () => ReactNode) => () => {
  const handleResize = () => {
    resizeHandlers.forEach((handler) =>
      handler({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    )
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <>{component()}</>
}
