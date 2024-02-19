import { SyntheticEvent, useState } from "react"

/**
 * Returns an object with properties related to image loading status.
 *
 * @returns {Object} The returned object contains the following properties:
 *   - isLoaded: A boolean indicating whether the image has finished loading.
 *   - isError: A boolean indicating whether an error occurred while loading the image.
 *   - onLoad: A function that is called when the image finishes loading.
 *   - onError: A function that is called when an error occurs while loading the image.
 */
export const useImageLoading = (): {
  isLoaded: boolean
  isError: boolean
  onLoad: (e: SyntheticEvent<HTMLImageElement, Event>) => void
  onError: (e: SyntheticEvent<HTMLImageElement, Event>) => void
} => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const onLoad = () => {
    setIsLoaded(true)
  }
  const onError = () => {
    setIsError(true)
  }

  return { isLoaded, isError, onLoad, onError }
}
