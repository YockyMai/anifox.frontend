import React from 'react'
import { Helmet } from 'react-helmet-async'

export const HomeLayoutMetadata = () => {
  return (
    <Helmet>
      <title>
        ANIFOX | Смотри, отслеживай и наслаждайся любимыми аниме онлайн!
      </title>
      <meta
        name='description'
        content='ANIFOX — Твой помощник в мире аниме! Здесь ты можешь смотреть любимые тайтлы в отличном качестве, отслеживать свой прогресс, составлять свои списки и делиться оценками с друзьями.'
      />
    </Helmet>
  )
}
