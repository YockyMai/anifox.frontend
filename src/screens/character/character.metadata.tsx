import { useParams } from 'react-router'

import { Helmet } from '@/common/lib/helmet'
import { useCharacterQuery } from '@/graphql/generated/output'

import { CharacterPageParams } from './character.interface'

export const CharacterMetadata = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data, loading } = useCharacterQuery({
    variables: {
      characterId: id
    }
  })

  const character = data?.character

  const generateOtherNames = () => {
    const names = [character?.nameEn, character?.nameKanji].filter(Boolean)
    return names.length ? `(${names.join(', ')})` : ''
  }

  const metadata = {
    title: data ? `${character?.name} ${generateOtherNames()}` : '',
    description: character?.about ?? '',
    image: character?.image ?? ''
  }

  return (
    <Helmet isLoading={loading}>
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      {metadata.image && <meta property='og:image' content={metadata.image} />}
      <meta property='og:type' content='article' />
    </Helmet>
  )
}
