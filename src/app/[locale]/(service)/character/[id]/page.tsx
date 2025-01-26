import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'
import { WithContext, Person } from 'schema-dts'

import { GenerateMetadataProps } from '@/common/types/next'
import { CharacterScreen } from '@/screens/character'
import { CharacterPageParams } from '@/screens/character/character.interface'
import { api } from '@/services/api'
import { usePrefetchCharacterQuery } from '@/services/queries'

import { generatePageMetadata } from './@lib/generate-page-metadata'

export const generateMetadata = async (props: GenerateMetadataProps<CharacterPageParams>) => {
  const params = await props.params;
  const metadata = generatePageMetadata(params)

  return metadata
}

const Character = async (props: { params: Promise<CharacterPageParams> }) => {
  const params = await props.params;
  const queryClient = new QueryClient()

  await usePrefetchCharacterQuery(params.id, queryClient)

  const { data } = await api.fetchCharacter(params.id)

  const jsonLd: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    image: data.image,
    name: data?.name,
    description: data?.about,
    additionalName: [data?.name_en, data?.name_kanji].filter(Boolean)
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>

      <CharacterScreen />
    </HydrationBoundary>
  )
}

export default Character
