export const calcSlideSpacing = (slideSpacing: number | string) => {
  if (typeof slideSpacing === 'number') {
    return `${slideSpacing}px`
  }

  return slideSpacing
}
