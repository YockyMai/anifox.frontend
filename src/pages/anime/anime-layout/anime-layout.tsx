'use client'

import { ReactNode } from 'react'

import { AnimeContent } from './ui'

export const AnimePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AnimeContent />
      {children}
    </>
  )
}
