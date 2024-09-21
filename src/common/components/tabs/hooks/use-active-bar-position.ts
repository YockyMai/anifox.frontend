import { MutableRefObject, useEffect, useState } from 'react'

export const useActiveBarPosition = (
  itemsRef: MutableRefObject<Record<string, HTMLDivElement | null>>,
  activeTab: string | undefined
) => {
  const [activeBarPosition, setActiveBarPosition] = useState<{
    left: number
    width: number
  } | null>(null)

  useEffect(() => {
    if (!activeTab) {
      setActiveBarPosition(null)
      return
    }

    const activeTabRef = itemsRef.current[activeTab]

    if (!activeTabRef) {
      return
    }

    setActiveBarPosition({
      left: activeTabRef.offsetLeft,
      width: activeTabRef.clientWidth
    })
  }, [activeTab, itemsRef])

  return activeBarPosition
}
