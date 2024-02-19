import { useEffect } from "react"

/**
 * A hook that disables scrolling on the body element based on the value of the `disable` parameter.
 *
 * @param {boolean} disable - If true, scrolling will be disabled. If false, scrolling will be enabled.
 * @return {void} This function does not return a value.
 */
export const useDisableScroll = (disable?: boolean) => {
  useEffect(() => {
    document.body.style.overflowY = disable ? "hidden" : "auto"
  }, [disable])
}
