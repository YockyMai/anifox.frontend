import { colord } from 'colord'

export const getAnimeAccentColorStyles = (
  hex: string = '#FFFFFF',
  theme: 'dark' | 'light'
) => {
  const backgroundColor = colord(hex).darken(0.1).toHslString()

  const textColor = colord(hex)
    .lighten(theme === 'light' ? -0.2 : 0.2)
    .toHslString()

  const bgTextColor = colord(hex).lighten(0.3).toHslString()

  return {
    '--card-text-color': textColor,
    '--card-background-color': backgroundColor,
    '--card-background-text-color': bgTextColor,
    '--card-overlay-text-color': textColor
  } as React.CSSProperties
}
