import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/services/queries'

import { AnimePageParams } from '../anime.interface'

export const AnimeLayoutMetadata = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data, isSuccess } = useAnimeQuery(animeUrl!)

  if (!isSuccess) {
    return null
  }

  const jsonLd = {
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

  const englishTitle = data.english?.filter((title) => title !== 'null')[0]
  const year = data.year
  const otherTitleInfo = Boolean(englishTitle || year)
    ? `(${englishTitle ?? ''}${englishTitle && year ? ', ' : ''}${year ?? ''})`
    : ''

  const pageTitle = `${data.title} — смотреть аниме ${otherTitleInfo}`.trim()

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name='description' content={data.description} />
      <meta property='og:type' content='video.movie' />
      {data.image && <meta property='og:image' content={data.image.medium} />}
      <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
