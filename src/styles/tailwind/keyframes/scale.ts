export const scaleIn = () => ({
  'scale-in': {
    '0%': {
      opacity: '0',
      transform: 'scale(90%)'
    },
    '100%': {
      opacity: '1',
      transform: 'scale(100%)'
    }
  }
})

export const scaleOut = () => ({
  'scale-out': {
    '100%': {
      opacity: '1',
      transform: 'scale(100%)'
    },
    '0%': {
      opacity: '0',
      transform: 'scale(90%)'
    }
  }
})
