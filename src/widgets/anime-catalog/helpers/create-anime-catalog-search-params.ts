import { AnimeCatalogFilterStore } from '../store'

export const createAnimeCatalogSearchParams = (
  params: Partial<AnimeCatalogFilterStore>
) => {
  const urlSearchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      for (const val of value) {
        urlSearchParams.append(key, val.toString())
      }
    } else {
      if (value !== undefined && value !== null) {
        urlSearchParams.set(key, value.toString())
      }
    }
  }

  return urlSearchParams.toString()
}
