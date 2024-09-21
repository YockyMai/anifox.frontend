import { MutableRefObject, useEffect, useState } from 'react'

export const useHoveredIndicatorPosition = (
  itemsRef: MutableRefObject<Record<string, HTMLDivElement | null>>,
  hoveredTabKey: string | null
) => {
  const [indicatorPosition, setIndicatorPosition] = useState<{
    left: number
    width: number
  } | null>(null)

  useEffect(() => {
    if (!hoveredTabKey) {
      return
    }

    const hoveredTabPosition = itemsRef.current[hoveredTabKey]

    if (!hoveredTabPosition) {
      return
    }

    setIndicatorPosition({
      left: hoveredTabPosition.offsetLeft,
      width: hoveredTabPosition.clientWidth
    })
  }, [hoveredTabKey, itemsRef])

  return indicatorPosition
}
