'use client'

import { useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

import { InfinityLoadingContainerProps } from './infinity-loading-container.props'

export const InfinityLoadingContainer = ({
  children,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage
}: InfinityLoadingContainerProps) => {
  const loadMoreTriggerRef = useRef<HTMLSpanElement>(null)
  const loadMoreTriggerInView = useInView(loadMoreTriggerRef)

  useEffect(() => {
    if (loadMoreTriggerInView && !isFetchingNextPage && hasNextPage)
      fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, loadMoreTriggerInView])

  return (
    <div className='infinity-loading-container'>
      {children}
      <span
        className='infinity-loading-container__load-more-trigger'
        ref={loadMoreTriggerRef}
      />
    </div>
  )
}
