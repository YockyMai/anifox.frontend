import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router'

import { useCharacterQuery } from '@/services/queries'

import { CharacterPageParams } from './character.interface'

export const CharacterMetadata = () => {
  const { id } = useParams<CharacterPageParams>()

  const { data } = useCharacterQuery(id!)

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
    <Helmet>
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      {metadata.image && <meta property='og:image' content={metadata.image} />}
      <meta property='og:type' content='article' />
    </Helmet>
  )
}
