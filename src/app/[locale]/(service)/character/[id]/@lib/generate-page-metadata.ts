import { Metadata } from 'next'

import { CharacterPageParams } from '@/screens/character/character.interface'
import { api } from '@/services/api'

export const generatePageMetadata = async (
  params: CharacterPageParams
): Promise<Metadata> => {
  const { data } = await api.fetchCharacter(params.id)

  const generateOtherNames = () => {
    const names = [data?.name_en, data?.name_kanji].filter(Boolean)

    if (!names.length) {
      return ''
    }

    return `(${names.join(', ')})`
  }

  const metadata: Metadata = {
    title: `${data.name} ${generateOtherNames()}`,
    description: data?.about
  }

  if (data.image) {
    metadata.openGraph = {
      images: [data?.image].filter(Boolean),
      type: 'article'
    }
  }

  return metadata
}
