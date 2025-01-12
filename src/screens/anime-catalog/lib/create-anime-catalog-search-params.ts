import { AnimeCatalogPageSearchParams } from '../anime-catalog.interface'

export const createAnimeCatalogSearchParams = (
  params: AnimeCatalogPageSearchParams
) => {
  const urlSearchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      // Если value — массив, добавляем каждое значение
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
