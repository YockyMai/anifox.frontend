'use client'

import { useEffect } from 'react'

export const useOnChangeHeaderVisibility = (
  cb: (isVisible: boolean) => void
) => {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop
      console.log('scrollTop', scrollTop)
      console.log('lastScrollTop', lastScrollTop)
      if (scrollTop > lastScrollTop) {
        cb(false)
      } else {
        cb(true)
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    let lastScrollTop = 0

    document.addEventListener('scroll', onScroll)
    console.log('scroll handler enabled')

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
