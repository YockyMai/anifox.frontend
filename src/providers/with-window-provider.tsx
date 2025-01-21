'use client'

import { useSetAtom } from 'jotai'
import { ReactNode, useEffect } from 'react'

import { $windowAtoms } from '@/common/store/window'

export const WithWindowProvider = ({ children }: { children: ReactNode }) => {
  const setWindowWidth = useSetAtom($windowAtoms.windowWidth)
  const setWindowHeight = useSetAtom($windowAtoms.windowHeight)

  useEffect(() => {
    const onWindowResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', onWindowResize)

    onWindowResize()

    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [setWindowHeight, setWindowWidth])

  return children
}
