'use client'

import { useSetAtom } from 'jotai'
import { ReactNode, useEffect } from 'react'

import { $windowAtoms } from '@/common/store/window'

export const WithWindowProvider = ({ children }: { children: ReactNode }) => {
  const setWindowHeight = useSetAtom($windowAtoms.windowHeight)
  const setWindowWidth = useSetAtom($windowAtoms.windowWidth)

  useEffect(() => {
    const onWindowResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onWindowResize)

      return () => {
        window.removeEventListener('resize', onWindowResize)
      }
    }
  }, [setWindowHeight, setWindowWidth])

  return children
}
