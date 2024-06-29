import { Badge, Tooltip, UnstyledButton } from '@anifox/ui'
import {
  IconCheck,
  IconClockPlus,
  IconDeviceTvOld,
  IconStack2Filled,
  IconZzz
} from '@tabler/icons-react'
import { useMemo } from 'react'

import { ANIME_LIST_VARIANTS } from '../../const/anime-list-variants'
import './anime-list-button.css'
import { AnimeListButtonProps } from './anime-list-button.interface'

export const AnimeListButton = ({ animeUrl }: AnimeListButtonProps) => {
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

  return (
    <Tooltip
      withoutArrow
      unstyled
      width={180}
      label={
        <div className='anime-status-button__dropdown'>
          {options.map((option) => (
            <UnstyledButton
              key={option.value}
              // onClick={() => setAnimeStatus(option.value)}
              className='anime-status-button__dropdown__item'
            >
              {option.icon}
              {option.title}
            </UnstyledButton>
          ))}
        </div>
      }
    >
      <Badge className='anime-status-button'>
        <p>Добавить в список</p>
        <IconStack2Filled />
      </Badge>
    </Tooltip>
  )
}
