import { InputCustomColors } from '../input.interface'

export const getInputStyles = (colors: InputCustomColors) => {
  return {
    ...(colors.inputBgColor && { '--input-bg-color': colors.inputBgColor }),
    ...(colors.inputLabelColor && {
      '--input-label-color': colors.inputLabelColor
    })
  } as React.CSSProperties
}
