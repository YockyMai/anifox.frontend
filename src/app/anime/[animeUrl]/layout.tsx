import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query'
import { ReactNode } from 'react'
import { WithContext, Movie } from 'schema-dts'

import { GenerateMetadataProps } from '@/common/types/next'
import { AnimeScreenLayout } from '@/screens/anime/anime-layout'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { api } from '@/services/api'
import { usePrefetchAnimeQuery } from '@/services/queries'

import { generatePageMetadata } from './@lib/generate-page-metadata'

export const generateMetadata = async ({
  params
}: GenerateMetadataProps<AnimePageParams>) => {
  const metadata = generatePageMetadata(params)

  return metadata
}

const AnimeLayout = async ({
  children,
  params
}: {
  children: ReactNode
  params: Promise<AnimePageParams>
}) => {
  const { animeUrl } = await params

  const queryClient = new QueryClient()

  await usePrefetchAnimeQuery(animeUrl, queryClient)

  const { data } = await api.fetchAnime(animeUrl)

  const jsonLd: WithContext<Movie> = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    image: data.image?.medium,
    name: data.title,
    description: data?.description,
    genre: data?.genres
      ? data.genres.map(({ name }) => name).join(', ')
      : undefined,
    datePublished: data?.aired_on,
    ...(data?.rating && data?.rating_count
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: data?.rating,
            ratingCount: data?.rating_count
          }
        }
      : {})
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <AnimeScreenLayout>{children}</AnimeScreenLayout>
    </HydrationBoundary>
  )
}

export default AnimeLayout
