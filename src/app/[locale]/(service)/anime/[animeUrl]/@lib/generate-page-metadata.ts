import { Metadata } from 'next'

import { GenerateMetadataProps } from '@/common/types/next'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { api } from '@/services/api'

export const generatePageMetadata = async (
  params: GenerateMetadataProps<AnimePageParams>['params']
): Promise<Metadata> => {
  const animeUrl = (await params).animeUrl

  const { data } = await api.fetchAnime(animeUrl)

  const englishTitle = data.english.filter((title) => title !== 'null')[0]
  const year = data.year

  const otherTitleInfo = Boolean(englishTitle || year)
    ? `(${englishTitle ?? ''}${englishTitle && year ? ', ' : ''}${year ?? ''})`
    : ''

  const metadata: Metadata = {
    title: `${data.title} — смотреть аниме ${otherTitleInfo}`.trim(),
    description: data.description
  }

  if (data.image) {
    metadata.openGraph = {
      images: [data.image.medium],
      type: 'video.movie'
    }
  }

  return metadata
}
