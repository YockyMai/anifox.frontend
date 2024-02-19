import { useEffect } from "react"

/**
 * Hook that detects clicks outside of a specified element and invokes a handler function.
 *
 * @param {React.RefObject<any>} ref - The reference to the element that the click event should be detected outside of.
 * @param {(event: MouseEvent | TouchEvent) => void} handler - The function to be invoked when a click event is detected outside of the specified element.
 * @return {void}
 */
export const useOutsideClick = (
  ref: any,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}
