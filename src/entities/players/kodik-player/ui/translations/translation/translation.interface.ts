import { EpisodeTranslationFragment } from '@/graphql/generated/output'

export type TranslationProps = {
  selectedTranslation: EpisodeTranslationFragment | null
  translation: EpisodeTranslationFragment
}
