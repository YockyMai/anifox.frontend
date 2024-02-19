import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const resizeHandlers = new Set<
  Dispatch<SetStateAction<{ width: number; height: number }>>
>()

/**
 * Returns the current size of the screen.
 *
 * @return {Object} An object containing the screenWidth and screenHeight properties.
 */
export const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    resizeHandlers.add(setWindowSize)

    return () => {
      resizeHandlers.delete(setWindowSize)
    }
  }, [])

  return windowSize
}
