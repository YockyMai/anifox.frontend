'use client'

import { useEffect } from 'react'

export const useOnChangeHeaderVisibility = (
  cb: (isVisible: boolean) => void
) => {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        cb(false)
      } else {
        cb(true)
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    let lastScrollTop = 0

    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
