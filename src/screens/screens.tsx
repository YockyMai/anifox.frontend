import { Route, Routes } from 'react-router'

import { useIsAuth } from '@/entities/viewer'

import {
  AnimeCatalogScreen,
  AnimeMostRatedScreen,
  AnimePopularOngoingScreen,
  AnimePopularScreen
} from './anime-catalog'
import { AnimeCharactersScreen } from './anime/anime-characters'
import { AnimeScreenLayout } from './anime/anime-layout'
import { AnimeOverviewScreen } from './anime/anime-overview'
import { AppsScreen } from './apps/apps'
import { CharacterScreen } from './character'
import { HomeLayout, HomeScreen } from './home'
import { KodikScreen } from './kodik'
import { LoginScreen } from './login'
import { ROUTES } from './pages.routes'
import { ProfileAnimeListScreen } from './profile/profile-anime-list'
import { ProfileLayout } from './profile/profile-layout'
import { RightHoldersScreen } from './right-holders'
import { SignupScreen } from './signup'

export const Screens = () => {
  const isAuth = useIsAuth()

  return (
    <Routes>
      <Route path={ROUTES.KODIK} element={<KodikScreen />} />

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
            path={ROUTES.CATALOG.MOST_RATED}
            element={<AnimeMostRatedScreen />}
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

        {isAuth ? (
          <>
            <Route path={ROUTES.PROFILE.ROOT} element={<ProfileLayout />}>
              <Route index element={<ProfileAnimeListScreen />} />
              <Route path={ROUTES.PROFILE.FAVORITES} element={<></>} />
            </Route>
          </>
        ) : (
          <>
            <Route path={ROUTES.LOGIN} element={<LoginScreen />} />
            <Route path={ROUTES.SIGN_UP} element={<SignupScreen />} />
          </>
        )}
        <Route path={ROUTES.APPS.ROOT} element={<AppsScreen />} />

        <Route path='*' element={'NOT FOUND'} />
      </Route>
    </Routes>
  )
}
