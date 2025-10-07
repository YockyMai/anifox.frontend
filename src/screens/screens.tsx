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
import { AuthExternalScreen } from './auth/external/auth-external'
import { CharacterScreen } from './character'
import { HomeLayout, HomeScreen } from './home'
import { KodikScreen } from './kodik'
import { LoginScreen } from './login'
import { ROUTES } from './pages.routes'
import { ProfileAnimeListScreen } from './profile/profile-anime-list'
import { ProfileFavorites } from './profile/profile-favorites/profile-favorites'
import { ProfileFriendsLayout } from './profile/profile-friends'
import { AddFriendsScreen } from './profile/profile-friends/add-friends/add-friends'
import { FriendRequestsScreen } from './profile/profile-friends/friend-requests/friend-requests'
import { UserFriendsScreen } from './profile/profile-friends/user-friends/user-friends'
import { ProfileLayout } from './profile/profile-layout'
import { ProfileStatistics } from './profile/profile-statistics'
import { RightHoldersScreen } from './right-holders'
import { SettingsUser } from './settings'
import { SettingsAppearance } from './settings/settings-appearance'
import { SettingsLayout } from './settings/settings-layout'
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
            path={ROUTES.CATALOG.ANIME.ROOT(':animeId', ':animeUrl')}
            element={<AnimeScreenLayout />}
          >
            <Route index element={<AnimeOverviewScreen />} />
            <Route
              path={ROUTES.CATALOG.ANIME.CHARACTERS(':animeId', ':animeUrl')}
              element={<AnimeCharactersScreen />}
            />
          </Route>
        </Route>
        <Route
          path={ROUTES.CHARACTER.ROOT(':id')}
          element={<CharacterScreen />}
        />

        <Route path={ROUTES.RIGHT_HOLDERS} element={<RightHoldersScreen />} />
        <Route path={ROUTES.PROFILE.ROOT(':login')} element={<ProfileLayout />}>
          <Route index element={<ProfileStatistics />} />
          <Route
            path={ROUTES.PROFILE.ANIME_LIST}
            element={<ProfileAnimeListScreen />}
          />
          <Route
            path={ROUTES.PROFILE.FAVORITES}
            element={<ProfileFavorites />}
          />
          <Route
            path={ROUTES.PROFILE.FRIENDS.ROOT(':login')}
            element={<ProfileFriendsLayout />}
          >
            <Route index element={<UserFriendsScreen />} />
            <Route
              path={ROUTES.PROFILE.FRIENDS.ADD(':login')}
              element={<AddFriendsScreen />}
            />
            <Route
              path={ROUTES.PROFILE.FRIENDS.REQUESTS(':login')}
              element={<FriendRequestsScreen />}
            />
          </Route>
        </Route>
        {isAuth ? (
          <>
            <Route path={ROUTES.SETTINGS.ROOT} element={<SettingsLayout />}>
              <Route index element={<SettingsUser />} />
              <Route
                path={ROUTES.SETTINGS.APPEARANCE}
                element={<SettingsAppearance />}
              />
            </Route>
          </>
        ) : (
          <>
            <Route
              path={ROUTES.AUTH.EXTERNAL}
              element={<AuthExternalScreen />}
            />
          </>
        )}

        <Route path={ROUTES.LOGIN} element={<LoginScreen />} />
        <Route path={ROUTES.SIGN_UP} element={<SignupScreen />} />
        <Route path={ROUTES.APPS.ROOT} element={<AppsScreen />} />

        <Route path='*' element={'NOT FOUND'} />
      </Route>
    </Routes>
  )
}
