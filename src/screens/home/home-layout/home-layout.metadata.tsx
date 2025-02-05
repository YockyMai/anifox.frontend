import React from 'react'

import { Helmet } from '@/common/components'

export const HomeLayoutMetadata = () => {
  return (
    <Helmet titleTemplate='ANIFOX | %s'>
      <title>Смотри, отслеживай и наслаждайся любимыми аниме онлайн!</title>
      <meta
        name='description'
        content='ANIFOX — Твой помощник в мире аниме! Здесь ты можешь смотреть любимые тайтлы в отличном качестве, отслеживать свой прогресс, составлять свои списки и делиться оценками с друзьями.'
      />
    </Helmet>
  )
}
