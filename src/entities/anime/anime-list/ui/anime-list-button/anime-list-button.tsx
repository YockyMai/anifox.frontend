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
import { ANIME_LIST_VARIANTS, AnimeTrackStatuses } from '@/services/api'
import { useAnimeStatusMutation } from '@/services/mutations'

import { AnimeListButtonProps } from './anime-list-button.interface'

export const AnimeListButton = ({
  animeUrl,
  withoutTitle,
  size = 28,
  openDelay
}: AnimeListButtonProps) => {
  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [status, setStatus] = useState<AnimeTrackStatuses | null>(null)

  const statusMutation = useAnimeStatusMutation()

  const isAuth = useAtomValue($userAtoms.isAuth)

  const options = useMemo(
    () => [
      {
        title: 'Смотрю',
        value: ANIME_LIST_VARIANTS.WATCHING,
        icon: <IconDeviceTvOld size={22} />
      },
      {
        title: 'Запланировано',
        value: ANIME_LIST_VARIANTS.PLAN_TO_WATCH,
        icon: <IconClockPlus size={22} />
      },
      {
        title: 'Просмотрено',
        value: ANIME_LIST_VARIANTS.COMPLETED,
        icon: <IconCheck size={22} />
      },
      {
        title: 'Отложено',
        value: ANIME_LIST_VARIANTS.ON_HOLD,
        icon: <IconZzz size={22} />
      }
    ],
    []
  )

  const addAnimeToList = (status: AnimeTrackStatuses) => {
    if (isAuth) {
      statusMutation.mutate({ animeUrl, status })
    } else {
      setStatus(status)
      setAuthModalIsOpened(true)
    }
  }

  const trigger = useMemo(() => {
    if (withoutTitle) {
      return (
        <Button
          color={UIColors.ORANGE}
          style={{ height: size, width: size }}
          className='flex items-center justify-center p-3'
        >
          <IconStack2Filled />
        </Button>
      )
    }

    return (
      <Badge className='flex h-full items-center gap-1 rounded bg-orange-300 px-2 text-orange-50'>
        <p className='text-sm'>Добавить в список</p>
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
        <div className='overflow-hidden rounded bg-slate-200 shadow dark:bg-slate-800'>
          {options.map((option) => (
            <UnstyledButton
              key={option.value}
              onClick={() => addAnimeToList(option.value)}
              className='flex w-full items-center justify-start gap-2 px-2 py-2 text-sm transition-colors hover:bg-slate-300 hover:dark:bg-slate-700 dark:hover:text-white'
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
        onAuthSuccess={() => {
          if (status) {
            statusMutation.mutate({ animeUrl, status })
            setStatus(null)
          }
        }}
      />
    </>
  )
}
