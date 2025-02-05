import { useEffect, useState } from 'react'

import { NoSSRProps } from './no-ssr.interface'

export const NoSSR = ({ children, loader = null }: NoSSRProps) => {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    setCanRender(true)
  }, [])

  if (!canRender) {
    return loader
  }

  return children
}
