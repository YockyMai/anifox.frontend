import { Portal, useOutsideClick } from '@anifox/ui'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'
import React, { useRef } from 'react'

import { UIVariants } from '@/common/types/ui-variants'
import { CatalogSearchButton } from '@/widgets/catalog-search'

import { $headerAtoms } from '../../store'
import { NavigatePanel } from '../navigate-panel/navigate-panel'
import { RandomAnimeButton } from '../random-anime-button'
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
          'fixed left-0 top-[--header-height] z-50 flex w-full flex-col gap-y-3 overflow-hidden bg-slate-800 px-2 shadow-sm shadow-black/10 backdrop-blur-3xl transition-transform duration-500',
          !headerIsVisible && '-translate-y-[--header-height]'
        )}
      >
        <div className='py-2'>
          <div className='flex flex-col gap-y-2'>
            <NavigatePanel />

            <RandomAnimeButton variant={UIVariants.OUTLINE} />
          </div>

          <div className='mt-5'>
            <CatalogSearchButton />
          </div>
        </div>
      </motion.div>
    </Portal>
  )
}
