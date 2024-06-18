'use client'

import { ThemeProvider } from '@anifox/ui'
import { ReactNode } from 'react'

// eslint-disable-next-line react/display-name
export const WithThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider requirements={{ image: { alt: 'Изображение отсутсвует' } }}>
      {children}
    </ThemeProvider>
  )
}
