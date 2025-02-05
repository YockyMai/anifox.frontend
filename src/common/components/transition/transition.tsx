import { clsx } from 'clsx'
import { CSSProperties, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { UIAnimations } from '@/common/types/ui-animations'
import { UISizes } from '@/common/types/ui-sizes'

import {
  MAP_ENTER_ACTIVE_CLASS,
  MAP_EXIT_ACTIVE_CLASS,
  MAP_TRANSITION_DURATION,
  TRANSITION_CLASS
} from './transition.const'
import './transition.css'
import { TransitionProps } from './transition.interface'

export const Transition = ({
  children,
  duration = UISizes.MD,
  animation = UIAnimations.FADE,
  mounded,
  className
}: TransitionProps) => {
  const timeout =
    typeof duration === 'number' ? duration : MAP_TRANSITION_DURATION[duration]

  const enterActiveClass = MAP_ENTER_ACTIVE_CLASS[animation]
  const exitActiveClass = MAP_EXIT_ACTIVE_CLASS[animation]

  const nodeRef = useRef<HTMLDivElement>(null)

  return (
    <CSSTransition
      in={mounded}
      unmountOnExit
      classNames={{
        enterActive: enterActiveClass,
        exitActive: exitActiveClass
      }}
      timeout={timeout}
      className={TRANSITION_CLASS}
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className={clsx(TRANSITION_CLASS, className)}
        style={
          {
            '--enter-animation-duration': `${timeout}ms`,
            '--exit-animation-duration': `${timeout + 5}ms`
          } as CSSProperties
        }
      >
        {children}
      </div>
    </CSSTransition>
  )
}
