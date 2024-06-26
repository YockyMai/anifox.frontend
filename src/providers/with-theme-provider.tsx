'use client'

import { ThemeProvider } from '@anifox/ui'
import { ReactNode } from 'react'

export const WithThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider requirements={{ image: { alt: 'Изображение отсутсвует' } }}>
      {children}
    </ThemeProvider>
  )
}
