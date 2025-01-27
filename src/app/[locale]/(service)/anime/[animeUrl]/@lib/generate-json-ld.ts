import { Movie, WithContext } from 'schema-dts'

import { AnimeResponse } from '@/services/api'

export const generateJsonLd = (data: AnimeResponse) => {
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

  return jsonLd
}
