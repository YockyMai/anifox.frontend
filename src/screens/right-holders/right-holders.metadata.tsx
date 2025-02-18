import { Helmet } from '@/common/lib/helmet'

export const RightHoldersMetadata = () => {
  return (
    <Helmet>
      <title>Для правообладателей</title>
      <meta
        name='description'
        content='Информация о деятельности сайта, авторских правах и полученных материалах'
      />
    </Helmet>
  )
}
