import { Route, Routes } from 'react-router-dom'

import { PAGE_URLS } from './pages.const'
import { PAGES } from './pages.routes'

export const Pages = () => {
  return (
    <Routes>
      <Route path={PAGE_URLS.HOME} element={<PAGES.HOME.LAYOUT />}>
        <Route index element={<PAGES.HOME.PAGE />} />
        <Route path={PAGE_URLS.CATALOG.ROOT}>
          <Route index element={<PAGES.CATALOG.ROOT.PAGE />} />
          <Route
            path={PAGE_URLS.CATALOG.ANIME.ROOT}
            element={<PAGES.CATALOG.ANIME.ROOT.LAYOUT />}
          >
            <Route index element={<PAGES.CATALOG.ANIME.ROOT.LAYOUT />} />
          </Route>
        </Route>
        <Route path={PAGE_URLS.SIGN_UP} element={<PAGES.SIGN_UP.LAYOUT />}>
          <Route index element={<PAGES.SIGN_UP.PAGE />} />
        </Route>
        <Route path={PAGE_URLS.LOGIN} element={<PAGES.LOGIN.LAYOUT />}>
          <Route index element={<PAGES.LOGIN.PAGE />} />
        </Route>
      </Route>
    </Routes>
  )
}
