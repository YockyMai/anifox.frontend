import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { ReactNode, Suspense } from 'react'

import { GenerateMetadataProps } from '@/common/types/next'
import { AnimeScreenLayout } from '@/screens/anime/anime-layout'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { api } from '@/services/api'
import { prefetchAnimeQuery } from '@/services/queries'

import { generateJsonLd } from './@lib/generate-json-ld'
import { generatePageMetadata } from './@lib/generate-page-metadata'
import Loading from './loading'

export const generateMetadata = async (
  props: GenerateMetadataProps<AnimePageParams>
) => {
  const params = await props.params
  const metadata = generatePageMetadata(params)

  return metadata
}

const AnimeLayout = async (props: {
  children: ReactNode
  params: Promise<AnimePageParams>
}) => {
  const params = await props.params

  const { children } = props

  const queryClient = new QueryClient()

  await prefetchAnimeQuery(params.animeUrl, queryClient)

  const { data } = await api.fetchAnime(params.animeUrl)

  const jsonLd = generateJsonLd(data)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimeScreenLayout>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </AnimeScreenLayout>

      <section>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
    </HydrationBoundary>
  )
}

export default AnimeLayout
