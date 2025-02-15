import { Helmet } from '@/common/lib/helmet'

export const AnimeCatalogMetadata = () => {
  const host = import.meta.env.VITE_HOST

  return (
    <Helmet>
      <title>Поиск аниме</title>
      <link rel='canonical' href={`${host}/anime`} />
    </Helmet>
  )
}
