import { useState, useRef, useEffect } from "react"

/**
 * Generates a hover state and event handlers for a hoverable element.
 *
 * @param {number} timeout - The duration (in milliseconds) before the hover state is canceled. Default is 0.
 * @return {object} An object containing the hover state, hover event handlers, and a function to force cancel the hover state.
 */
export function useHover(timeout: number = 0): {
  isHovered: boolean
  hoverProps: { onMouseEnter: () => void; onMouseLeave: () => void }
  forceCancelHover: () => void
} {
  const [isHovered, setIsHovered] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const forceCancelHover = () => {
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, timeout)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }

  return { isHovered, hoverProps, forceCancelHover }
}
