import { ThemeProvider } from '@anifox/ui'
import { ReactNode } from 'react'

export const withThemeProvider = (component: () => ReactNode) => () => {
  return (
    <ThemeProvider requirements={{ image: { alt: 'Изображение отсутсвует' } }}>
      {component()}
    </ThemeProvider>
  )
}
