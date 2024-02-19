import { useEffect } from "react"

/**
 * Initializes a hook that listens for changes in fullscreen mode.
 *
 * @param {Object} options - The options for the hook.
 * @param {function} options.onFullscreenEnter - The callback function to be executed when entering fullscreen mode.
 * @param {function} options.onFullScreenExit - The callback function to be executed when exiting fullscreen mode.
 */
export const useFullscreenChange = ({
  onFullscreenEnter,
  onFullScreenExit,
}: {
  onFullScreenExit?: (e: Event) => void
  onFullscreenEnter?: (e: Event) => void
}) => {
  const onFullscreenChange = (e: Event) => {
    if (!document.fullscreenElement) {
      onFullScreenExit && onFullScreenExit(e)
    } else {
      onFullscreenEnter && onFullscreenEnter(e)
    }
  }

  useEffect(() => {
    document.addEventListener("fullscreenchange", onFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [])
}
