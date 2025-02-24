import { Helmet } from '@/common/lib/helmet'

export const HomeLayoutMetadata = () => {
  return (
    <Helmet titleTemplate='ANIFOX | %s'>
      <link
        href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  )
}
