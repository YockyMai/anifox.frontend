import { Actions, Store } from '@anifox/store'
import { createSearchParams, useNavigate } from 'react-router'

import { $catalogSearch } from '../store'

export const useCatalogSearchParamsSync = () => {
  const navigate = useNavigate()

  $catalogSearch.store.subscribe((state) => {
    const currentSearchParams = createSearchParams(document.location.search)

    for (const [key, value] of Object.entries(state)) {
      if (state.isOpened) {
        currentSearchParams.set(key, value.toString())
      } else {
        currentSearchParams.delete(key)
      }
    }

    navigate({
      pathname: location.pathname,
      search: currentSearchParams.toString()
    })
  })
}
