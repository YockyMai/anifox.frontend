import { useElementSize } from '@anifox/hooks'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

import { UIColors } from '@/common/types/ui-colors'

import { Badge } from '../badge'
import { SpoilerProps } from './spoiler.interface'

export const Spoiler = ({
  children,
  maxHeight,
  buttonWidthFull
}: SpoilerProps) => {
  const [ref, size] = useElementSize<HTMLDivElement>()
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div>
      <motion.div
        initial={{ maxHeight: maxHeight, overflow: 'hidden' }}
        animate={{ maxHeight: isCollapsed ? maxHeight : size.height }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div ref={ref}>{children}</div>
      </motion.div>

      {size.height > maxHeight && (
        <Badge
          color={isCollapsed ? UIColors.GREEN : UIColors.RED}
          className={clsx(
            'cursor-pointer',
            buttonWidthFull ? 'w-full' : 'w-fit'
          )}
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? 'Показать еще' : 'Скрыть'}
        </Badge>
      )}
    </div>
  )
}
