'use client'

import { useEffect, useState } from 'react'

import { addRipple } from './lib/add-ripple'
import { RippleArrayType } from './use-ripple-effect.interface'

export const useRippleEffect = (duration: number = 850) => {
  const [rippleArray, setRippleArray] = useState<RippleArrayType[]>([])

  useEffect(() => {
    let bounce: number

    if (rippleArray.length > 0) {
      bounce = window.setTimeout(() => {
        setRippleArray([])
        window.clearTimeout(bounce)
      }, duration * 4)
    }

    return () => window.clearTimeout(bounce)
  }, [rippleArray.length, duration])

  return {
    rippleArray,
    setRippleArray,
    addRipple,
    rippleDuration: duration
  }
}
