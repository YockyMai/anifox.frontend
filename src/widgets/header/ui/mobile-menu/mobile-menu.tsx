import { useOutsideClick } from '@anifox/hooks'
import { Portal } from '@anifox/ui'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import React, { useRef } from 'react'

import { UIVariants } from '@/common/types/ui-variants'

import { $headerAtoms } from '../../store'
import { NavigatePanel } from '../navigate-panel/navigate-panel'
import { RandomAnimeButton } from '../random-anime-button'
import { SearchButton } from '../search-button/search-button'
import { UserButton } from '../user-button/user-button'
import './mobile-menu.css'

export const MobileMenu = () => {
  const headerIsVisible = useAtomValue($headerAtoms.isVisible)

  const ref = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(
    $headerAtoms.isMobileMenuOpen
  )

  useOutsideClick(ref, () => {
    setIsMobileMenuOpen(false)
  })

  return (
    <Portal>
      <motion.div
        ref={ref}
        initial={false}
        variants={{
          open: {
            height: 'auto'
          },
          closed: {
            height: 0
          }
        }}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        className={clsx(
          'mobile-menu',
          !headerIsVisible && 'mobile-menu_header-hidden'
        )}
      >
        <div className='mt-0.5'>
          <NavigatePanel />
        </div>

        <div className='mt-2 grid grid-cols-2 gap-x-3'>
          <SearchButton />
          <RandomAnimeButton variant={UIVariants.OUTLINE} />
        </div>

        <div className='my-2'>
          <UserButton />
        </div>
      </motion.div>
    </Portal>
  )
}
