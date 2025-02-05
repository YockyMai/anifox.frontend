import React from 'react'
import { Route, Routes } from 'react-router'

import {
  AnimeCatalogScreen,
  AnimePopularOngoingScreen,
  AnimePopularScreen
} from './anime-catalog'
import { AnimeCharactersScreen } from './anime/anime-characters'
import { AnimeScreenLayout } from './anime/anime-layout'
import { AnimeOverviewScreen } from './anime/anime-overview'
import { CharacterScreen } from './character'
import { HomeLayout, HomeScreen } from './home'
import { LoginScreen } from './login'
import { ROUTES } from './pages.routes'
import { RightHoldersScreen } from './right-holders'
import { SignupScreen } from './signup'

export const Screens = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomeLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path={ROUTES.CATALOG.ROOT}>
          <Route index element={<AnimeCatalogScreen />} />
          <Route
            path={ROUTES.CATALOG.POPULAR}
            element={<AnimePopularScreen />}
          />
          <Route
            path={ROUTES.CATALOG.POPULAR_ONGOING}
            element={<AnimePopularOngoingScreen />}
          />
          <Route
            path={ROUTES.CATALOG.ANIME.ROOT}
            element={<AnimeScreenLayout />}
          >
            <Route index element={<AnimeOverviewScreen />} />
            <Route
              path={ROUTES.CATALOG.ANIME.CHARACTERS}
              element={<AnimeCharactersScreen />}
            />
          </Route>
        </Route>
        <Route path={ROUTES.CHARACTER.ROOT} element={<CharacterScreen />} />

        <Route path={ROUTES.RIGHT_HOLDERS} element={<RightHoldersScreen />} />
        <Route path={ROUTES.LOGIN} element={<LoginScreen />} />
        <Route path={ROUTES.SIGN_UP} element={<SignupScreen />} />

        <Route path='*' element={'NOT FOUND'} />
      </Route>
    </Routes>
  )
}
