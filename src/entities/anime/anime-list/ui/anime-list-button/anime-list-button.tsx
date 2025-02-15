import { Badge, Button, HoverCard, UnstyledButton } from '@anifox/ui'
import {
  IconCheck,
  IconClockPlus,
  IconDeviceTvOld,
  IconStack2Filled,
  IconZzz
} from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import { useMemo, useState } from 'react'

import { UIColors } from '@/common/types/ui-colors'
import { AuthModal } from '@/entities/auth/auth-modal'
import { $userAtoms } from '@/entities/user/atoms'

import { ANIME_LIST_VARIANTS } from '../../const/anime-list-variants'
import './anime-list-button.css'
import { AnimeListButtonProps } from './anime-list-button.interface'

export const AnimeListButton = ({
  animeUrl,
  withoutTitle,
  size = 28,
  openDelay
}: AnimeListButtonProps) => {
  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)

  const user = useAtomValue($userAtoms.user)

  const options = useMemo(
    () => [
      {
        title: 'Смотрю',
        value: ANIME_LIST_VARIANTS.WATCHING,
        icon: <IconDeviceTvOld size={22} />
      },
      {
        title: 'Запланировано',
        value: ANIME_LIST_VARIANTS.IN_PLAN,
        icon: <IconClockPlus size={22} />
      },
      {
        title: 'Просмотрено',
        value: ANIME_LIST_VARIANTS.WATCHED,
        icon: <IconCheck size={22} />
      },
      {
        title: 'Отложено',
        value: ANIME_LIST_VARIANTS.POSTPONED,
        icon: <IconZzz size={22} />
      }
    ],
    []
  )

  const addAnimeToList = (type: string) => {
    if (!user) {
      setAuthModalIsOpened(true)
    }
  }

  const trigger = useMemo(() => {
    if (withoutTitle) {
      return (
        <Button
          color={UIColors.ORANGE}
          style={{ height: size, width: size }}
          className='anime-status-button-without-text'
        >
          <IconStack2Filled />
        </Button>
      )
    }

    return (
      <Badge className='anime-status-button'>
        <p>Добавить в список</p>
        <IconStack2Filled />
      </Badge>
    )
  }, [size, withoutTitle])

  return (
    <>
      <HoverCard
        openDelay={openDelay}
        withoutArrow
        unstyled
        width={180}
        trigger={trigger}
      >
        <div className='anime-status-button__dropdown'>
          {options.map((option) => (
            <UnstyledButton
              key={option.value}
              onClick={() => addAnimeToList(option.value)}
              className='anime-status-button__dropdown__item'
            >
              {option.icon}
              {option.title}
            </UnstyledButton>
          ))}
        </div>
      </HoverCard>

      <AuthModal
        isOpen={authModalIsOpened}
        onClose={() => setAuthModalIsOpened(false)}
      />
    </>
  )
}
