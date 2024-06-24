'use client'

import NProgress from 'nprogress'
import { useEffect } from 'react'

export const NavigationProgress = () => {
  const color = '#93c5fd'
  const zIndex = 9999
  const height = 2

  const positionStyle = 'top: 0;'

  const styles = (
    <style>
      {`#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:${zIndex};${positionStyle}left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress #nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}
    </style>
  )

  const toAbsoluteURL = (url: string): string => {
    return new URL(url, window.location.href).href
  }

  const isHashAnchor = (currentUrl: string, newUrl: string): boolean => {
    const current = new URL(toAbsoluteURL(currentUrl))
    const next = new URL(toAbsoluteURL(newUrl))
    return current.href.split('#')[0] === next.href.split('#')[0]
  }

  const isSameHostName = (currentUrl: string, newUrl: string): boolean => {
    const current = new URL(toAbsoluteURL(currentUrl))
    const next = new URL(toAbsoluteURL(newUrl))
    return (
      current.hostname.replace(/^www\./, '') ===
      next.hostname.replace(/^www\./, '')
    )
  }

  useEffect(() => {
    const isAnchorOfCurrentUrl = (currentUrl: string, newUrl: string) => {
      const currentUrlObj = new URL(currentUrl)
      const newUrlObj = new URL(newUrl)
      // Compare hostname, pathname, and search parameters
      if (
        currentUrlObj.hostname === newUrlObj.hostname &&
        currentUrlObj.pathname === newUrlObj.pathname &&
        currentUrlObj.search === newUrlObj.search
      ) {
        // Check if the new URL is just an anchor of the current URL page
        const currentHash = currentUrlObj.hash
        const newHash = newUrlObj.hash
        return (
          currentHash !== newHash &&
          currentUrlObj.href.replace(currentHash, '') ===
            newUrlObj.href.replace(newHash, '')
        )
      }
      return false
    }

    var nProgressClass: NodeListOf<HTMLHtmlElement> =
      document.querySelectorAll('html')

    const removeNProgressClass = (): void =>
      nProgressClass.forEach((el: Element) =>
        el.classList.remove('nprogress-busy')
      )

    function findClosestAnchor(
      element: HTMLElement | null
    ): HTMLAnchorElement | null {
      while (element && element.tagName.toLowerCase() !== 'a') {
        element = element.parentElement
      }
      return element as HTMLAnchorElement
    }

    function handleClick(event: MouseEvent): void {
      try {
        const target = event.target as HTMLElement
        const anchor = findClosestAnchor(target)
        const newUrl = anchor?.href
        if (newUrl) {
          const currentUrl = window.location.href
          // const newUrl = (anchor as HTMLAnchorElement).href;
          const isExternalLink =
            (anchor as HTMLAnchorElement).target === '_blank'

          // Check for Special Schemes
          const isSpecialScheme = [
            'tel:',
            'mailto:',
            'sms:',
            'blob:',
            'download:'
          ].some((scheme) => newUrl.startsWith(scheme))

          const isAnchor: boolean = isAnchorOfCurrentUrl(currentUrl, newUrl)
          const notSameHost = !isSameHostName(window.location.href, anchor.href)
          if (notSameHost) {
            return
          }
          if (
            newUrl === currentUrl ||
            isAnchor ||
            isExternalLink ||
            isSpecialScheme ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey ||
            isHashAnchor(window.location.href, anchor.href) ||
            !toAbsoluteURL(anchor.href).startsWith('http')
          ) {
            NProgress.start()
            NProgress.done()
            removeNProgressClass()
          } else {
            NProgress.start()
          }
        }
      } catch (err) {
        NProgress.start()
        NProgress.done()
      }
    }

    ;((history: History): void => {
      const pushState = history.pushState
      history.pushState = (...args) => {
        NProgress.done()
        removeNProgressClass()
        return pushState.apply(history, args)
      }
    })((window as Window).history)
    ;((history: History): void => {
      const replaceState = history.replaceState
      history.replaceState = (...args) => {
        NProgress.done()
        removeNProgressClass()
        return replaceState.apply(history, args)
      }
    })((window as Window).history)

    function handlePageHide(): void {
      NProgress.done()
      removeNProgressClass()
    }

    function handleBackAndForth(): void {
      NProgress.done()
    }

    window.addEventListener('popstate', handleBackAndForth)
    document.addEventListener('click', handleClick)
    window.addEventListener('pagehide', handlePageHide)

    return (): void => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('pagehide', handlePageHide)
      window.removeEventListener('popstate', handleBackAndForth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return styles
}
