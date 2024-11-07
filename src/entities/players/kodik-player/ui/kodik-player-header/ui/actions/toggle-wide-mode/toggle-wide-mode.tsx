'use client'

import { IconMaximize, IconMinimize } from '@tabler/icons-react'
import { useAtom } from 'jotai'
import React from 'react'

import { HoverCard, SwitchAnimation, UnstyledButton } from '@/common/components'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'

export const ToggleWideMode = () => {
  const [isWideMode, setIsWideMode] = useAtom($kodikPlayerAtoms.isWideMode)

  return (
    <HoverCard
      trigger={
        <UnstyledButton
          onClick={() => setIsWideMode((prev) => !prev)}
          className='kodik-player-header__bars__action'
        >
          <SwitchAnimation>
            {isWideMode ? <IconMinimize /> : <IconMaximize />}
          </SwitchAnimation>
        </UnstyledButton>
      }
    >
      {isWideMode ? 'Обычный просмотр' : 'Широкий экран'}
    </HoverCard>
  )
}
