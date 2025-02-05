import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

import { $headerAtoms } from '../store'

export const useToggleHeaderOpacity = (targetInView: boolean) => {
  const setHeaderIsTransparent = useSetAtom($headerAtoms.isTransparent)

  useEffect(() => {
    setHeaderIsTransparent(targetInView)

    return () => {
      setHeaderIsTransparent(false)
    }
  }, [targetInView, setHeaderIsTransparent])
}
