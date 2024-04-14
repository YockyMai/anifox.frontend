import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export const CatalogPageHelmet = () => {
  const { t } = useTranslation()

  const title = t('catalog.page-title')
  // TODO: разобраться с синхронизацией перевода i18n между frontend и ui проектами

  return <Helmet title={title} />
}
