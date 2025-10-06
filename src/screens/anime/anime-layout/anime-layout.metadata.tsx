import { useParams } from 'react-router'

import { Helmet } from '@/common/lib/helmet'
import { useAnimeQuery } from '@/entities/anime/hooks'

import { AnimePageParams } from '../anime.interface'

export const AnimeLayoutMetadata = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data, loading } = useAnimeQuery(animeUrl!)

  const anime = data?.anime

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    image: anime?.image?.medium,
    name: anime?.title,
    description: anime?.description,
    genre: anime?.genres
      ? anime.genres.map(({ name }) => name).join(', ')
      : undefined,
    datePublished: anime?.airedOn,
    ...(anime?.ratingCount && anime?.ratingCount
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: anime?.rating,
            ratingCount: anime?.ratingCount
          }
        }
      : {})
  }

  const englishTitle = anime?.titlesEnglish?.filter(
    (title) => title !== 'null'
  )[0]
  const year = anime?.year
  const otherTitleInfo =
    englishTitle ?? year
      ? `(${englishTitle ?? ''}${englishTitle && year ? ', ' : ''}${year ?? ''})`
      : ''

  const pageTitle = `${anime?.title} — смотреть аниме ${otherTitleInfo}`.trim()

  return (
    <Helmet isLoading={loading}>
      <title>{pageTitle}</title>

      {anime?.description}
      <meta name='description' content={anime?.description ?? ''} />

      <meta property='og:type' content='video.movie' />
      {anime?.image.medium && (
        <meta property='og:image' content={anime.image.medium} />
      )}
      <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
