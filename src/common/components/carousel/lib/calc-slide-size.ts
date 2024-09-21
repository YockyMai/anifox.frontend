export const calcSlideSize = (size?: number | string) => {
  if (!size) {
    return '100%'
  }

  if (typeof size === 'string') {
    return size
  }

  return `${size}px`
}
