import { Helmet } from '@/common/lib/helmet'

export const AppsMetadata = () => {
  return (
    <Helmet titleTemplate='ANIFOX | %s'>
      <title>Скачать приложение</title>
      <meta
        name='description'
        content='Скачайте приложение ANIFOX для Android и Windows'
      />
    </Helmet>
  )
}
