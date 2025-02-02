import { lazy } from 'react'

export const AnimeCharactersScreen = lazy(() =>
  import('./anime-characters').then(({ AnimeCharactersScreen }) => ({
    default: AnimeCharactersScreen
  }))
)
