import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export const CatalogPageHelmet = () => {
  const { t } = useTranslation()

  const title = t('catalog.page-title')

  return <Helmet title={title} />
}
