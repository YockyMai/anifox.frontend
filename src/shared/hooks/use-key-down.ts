import { useEffect } from 'react'

export const useKeyDown = (
  code: string,
  action: (e: KeyboardEvent) => void,
  /**
   * Registers a keyboard event listener that triggers the given action when a specific key code is pressed.
   *
   * @param {string} code - The key code to listen for.
   * @param {(e: KeyboardEvent) => void} action - The action to be executed when the key code is pressed.
   * @return {void} This function does not return anything.
   */
) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === code) {
        action(e)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}
