'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import './marquee-text.css'
import { MarqueeTextProps } from './marquee-text.interface'

export const MarqueeText = ({
  children,
  speed = 60,
  pause = 1000,
  gap = 50,
  paddingX,
  ...other
}: MarqueeTextProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const cloneRef = useRef<HTMLDivElement | null>(null)
  const [scrollNeeded, setScrollNeeded] = useState(false)
  const [inViewRef, isVisible] = useInView()

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        setScrollNeeded(
          textRef.current.scrollWidth > containerRef.current.clientWidth
        )
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)

    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (scrollNeeded && isVisible) {
      const scrollText = () => {
        if (textRef.current && cloneRef.current && containerRef.current) {
          const containerWidth = containerRef.current.clientWidth
          const textWidth = textRef.current.scrollWidth

          textRef.current.style.transition = 'none'
          cloneRef.current.style.transition = 'none'
          textRef.current.style.transform = `translateX(${paddingX ?? 0}px)`
          cloneRef.current.style.transform = `translateX(${textWidth + gap}px)`

          timeout = setTimeout(() => {
            if (textRef.current && cloneRef.current) {
              textRef.current.style.transition = `transform ${
                (textWidth + containerWidth + gap) / speed
              }s linear`

              cloneRef.current.style.transition = `transform ${
                (textWidth + containerWidth + gap) / speed
              }s linear`

              textRef.current.style.transform = `translateX(-${textWidth + gap}px)`
              cloneRef.current.style.transform = `translateX(${paddingX ?? 0}px)`

              timeout = setTimeout(
                () => {
                  scrollText()
                },
                ((textWidth + containerWidth + gap) * 1000) / speed
              )
            }
          }, pause)
        }
      }

      scrollText()
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [scrollNeeded, speed, pause, gap, isVisible, paddingX])

  return (
    <div ref={inViewRef} {...other}>
      <div
        className='marquee-text-container'
        style={{ paddingLeft: !scrollNeeded ? paddingX : undefined }}
        ref={containerRef}
      >
        <div className='w-0 max-w-full select-none overflow-hidden whitespace-nowrap opacity-0'>
          {children}
        </div>
        <div className='marquee-text' ref={textRef}>
          {children}
        </div>
        <div className='marquee-text' ref={cloneRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
