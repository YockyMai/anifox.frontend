import { useEffect, useRef } from 'react'

/**
 * Executes a callback function at a specified interval.
 *
 * @param {() => void} callback - The function to be executed.
 * @param {number} interval - The interval, in milliseconds, at which the callback function should be executed.
 * @return {void} This function does not return anything.
 */
export const useInterval = (callback: () => void, interval: number) => {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!interval && interval !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), interval)

    return () => clearInterval(id)
  }, [interval])
}
