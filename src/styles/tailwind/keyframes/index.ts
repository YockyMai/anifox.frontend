import { fadeOut, fadeIn } from './fade'
import { ripple } from './ripple'
import { scaleIn, scaleOut } from './scale'
import { slide } from './slide'

export const bootstrapKeyframes = (): Record<
  string,
  Record<string, Record<string, string>>
> => {
  return {
    ...fadeOut(),
    ...fadeIn(),
    ...scaleIn(),
    ...scaleOut(),
    ...ripple(),
    ...slide()
  }
}
