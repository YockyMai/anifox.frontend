import { Dispatch, SetStateAction } from 'react'

import { RippleArrayType } from '../use-ripple-effect.interface'

export const addRipple = (
  event: React.MouseEvent<HTMLElement>,
  rippleArray: RippleArrayType[],
  setRippleArray: Dispatch<SetStateAction<RippleArrayType[]>>
) => {
  const rippleContainer = event.currentTarget.getBoundingClientRect()

  const size =
    rippleContainer.width > rippleContainer.height
      ? rippleContainer.width
      : rippleContainer.height

  const x = event.pageX - rippleContainer.left - size / 2
  const y = event.pageY - rippleContainer.top - size / 2

  const newRipple = {
    x,
    y,
    size
  }

  setRippleArray([...rippleArray, newRipple])
}
