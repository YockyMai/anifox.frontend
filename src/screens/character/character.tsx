import { CharacterMetadata } from './character.metadata'
import { CharacterInfo, CharacterParticipation } from './ui'

export const CharacterScreen = () => {
  return (
    <>
      <CharacterMetadata />
      <CharacterInfo />
      <CharacterParticipation />
    </>
  )
}
