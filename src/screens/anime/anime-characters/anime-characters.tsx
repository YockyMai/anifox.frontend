import { AnimeCharactersFilters } from './ui/anime-characters-filters'
import { AnimeCharactersList } from './ui/anime-characters-list'

export const AnimeCharactersScreen = () => {
  return (
    <div className='container'>
      <AnimeCharactersFilters />
      <AnimeCharactersList />
    </div>
  )
}
