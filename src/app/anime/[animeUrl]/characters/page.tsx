import { Provider } from 'jotai'

import { AnimeCharactersScreen } from '@/screens/anime/anime-characters'
import { AnimePageParams } from '@/screens/anime/anime.interface'

const AnimeCharacters = async ({
  params
}: {
  params: Promise<AnimePageParams>
}) => {
  return (
    <Provider>
      <AnimeCharactersScreen />
    </Provider>
  )
}

export default AnimeCharacters
