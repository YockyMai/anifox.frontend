export const accordionSlideDown = () => ({
  accordionSlideDown: {
    from: { height: '0px' },
    to: { height: 'var(--radix-accordion-content-height)' }
  }
})

export const accordionSlideUp = () => ({
  accordionSlideUp: {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0px' }
  }
})
