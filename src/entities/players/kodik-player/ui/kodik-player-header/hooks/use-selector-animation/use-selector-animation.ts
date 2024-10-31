import { useAnimate } from 'framer-motion'

import { UseSelectorAnimationsOptions } from './use-selector-animation.interface'

export const useSelectorAnimation = ({
  listNode,
  rootNode,
  toHeight,
  toWidth
}: UseSelectorAnimationsOptions) => {
  const [scope, animate] = useAnimate()

  const buttonNode = `${rootNode}__button`

  const startOpenAnimation = () => {
    animate(
      buttonNode,
      {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      { duration: 0.15 }
    )

    animate(
      rootNode,
      {
        width: toWidth
      },
      { duration: 0.15 }
    ).then(() => {
      animate(
        listNode,
        {
          height: toHeight
        },
        { duration: 0.3 }
      )
    })
  }

  const startCloseAnimation = () => {
    animate(
      listNode,
      {
        height: 0
      },
      { duration: 0.3 }
    ).then(() => {
      animate(
        rootNode,
        {
          width: 'auto'
        },
        { duration: 0.15 }
      )

      animate(
        buttonNode,
        {
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px'
        },
        { duration: 0.15 }
      )
    })
  }

  return {
    startOpenAnimation,
    startCloseAnimation,
    scope
  }
}
