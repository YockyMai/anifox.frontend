import { CharacterLightFragment } from '@/graphql/generated/output'

export type AnimeCharacterCardProps = {
  character: CharacterLightFragment
  accentColor?: string
}
