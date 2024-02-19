import { Route, Routes } from 'react-router-dom'
import { AnimeLayout, AnimePage } from '@/pages/anime'
import { CatalogPage } from '@/pages/catalog'
import { MainLayout, MainPage } from './main'

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={'anime'}>
          <Route index element={<CatalogPage />} />
          <Route path={'title/:animeUrl'} element={<AnimeLayout />}>
            <Route index element={<AnimePage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}
