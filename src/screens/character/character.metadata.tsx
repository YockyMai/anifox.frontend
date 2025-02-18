import React from 'react'
import { useParams } from 'react-router'

import { Helmet } from '@/common/lib/helmet'
import { useCharacterQuery } from '@/services/queries'

import { CharacterPageParams } from './character.interface'

export const CharacterMetadata = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data, isLoading } = useCharacterQuery(id!)

  const generateOtherNames = () => {
    const names = [data?.name_en, data?.name_kanji].filter(Boolean)
    return names.length ? `(${names.join(', ')})` : ''
  }

  const metadata = {
    title: data ? `${data.name} ${generateOtherNames()}` : '',
    description: data?.about ?? '',
    image: data?.image ?? ''
  }

  return (
    <Helmet isLoading={isLoading}>
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      {metadata.image && <meta property='og:image' content={metadata.image} />}
      <meta property='og:type' content='article' />
    </Helmet>
  )
}
