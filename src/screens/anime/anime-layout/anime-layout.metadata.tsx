import { useParams } from 'react-router'

import { Helmet } from '@/common/lib/helmet'
import { useAnimeQuery } from '@/graphql/queries'

import { AnimePageParams } from '../anime.interface'

export const AnimeLayoutMetadata = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data, isLoading } = useAnimeQuery(animeUrl!)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    image: data?.image?.medium,
    name: data?.title,
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

  const englishTitle = data?.english?.filter((title) => title !== 'null')[0]
  const year = data?.year
  const otherTitleInfo = Boolean(englishTitle || year)
    ? `(${englishTitle ?? ''}${englishTitle && year ? ', ' : ''}${year ?? ''})`
    : ''

  const pageTitle = `${data?.title} — смотреть аниме ${otherTitleInfo}`.trim()

  return (
    <Helmet isLoading={isLoading}>
      <title>{pageTitle}</title>
      <meta name='description' content={data?.description} />
      <meta property='og:type' content='video.movie' />
      {data?.image && <meta property='og:image' content={data.image.medium} />}
      <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
