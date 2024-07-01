'use client'

import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import React, { useEffect, useRef } from 'react'

import {
  DEFAULT_DELEGATE_SELECTOR,
  DEFAULT_FANCYBOX_OPTIONS
} from './fancybox.const'
import { FancyboxProps } from './fancybox.interface'

export const Fancybox = ({
  delegate = DEFAULT_DELEGATE_SELECTOR,
  options = {},
  children
}: FancyboxProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current

    NativeFancybox.bind(container, delegate, {
      ...DEFAULT_FANCYBOX_OPTIONS,
      ...options
    })

    return () => {
      NativeFancybox.unbind(container)
    }
  })

  return <div ref={containerRef}>{children}</div>
}
