'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { SwitchAnimationProps } from './switch-animation.interface'

export const SwitchAnimation = ({ children }: SwitchAnimationProps) => {
  return (
    <AnimatePresence key={children?.toString()} mode='wait' initial={false}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
