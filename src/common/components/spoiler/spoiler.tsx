'use client'

import { useElementSize } from '@anifox/hooks'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

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
      <div
        style={{
          maxHeight: isCollapsed ? maxHeight : undefined,
          overflow: 'hidden'
        }}
      >
        <div ref={ref}>{children}</div>
      </div>

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
