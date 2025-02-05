import React from 'react'
import { Helmet } from 'react-helmet-async'

export const AnimeCatalogMetadata = () => {
  const host = import.meta.env.VITE_HOST

  return (
    <Helmet>
      <title>Поиск аниме</title>
      <link rel='canonical' href={`${host}/anime`} />
    </Helmet>
  )
}
