import { Helmet } from '@/common/lib/helmet'

export const AnimeMostRatedMetadata = () => {
  return (
    <Helmet>
      <title>Самые популярные аниме — Смотреть онлайн!</title>
      <meta
        name='description'
        content='Список самых популярных и культовых произведений в мире аниме. Откройте для себя аниме, которые завоевали сердца миллионов поклонников по всему миру.'
      />
    </Helmet>
  )
}
