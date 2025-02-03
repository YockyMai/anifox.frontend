import {
  IconGraph,
  IconMessage,
  IconPlayerPlay,
  IconUserPentagon
} from '@tabler/icons-react'

export const FEATURES = [
  {
    title: 'Просмотр',
    description:
      'Смотрите аниме онлайн в высоком качестве, в любом месте и в любое время.',
    icon: <IconPlayerPlay size={46} />
  },
  {
    title: 'Прогресс',
    description:
      'Анифокс автоматически добавляет аниме в списки и отслеживает ваш прогресс.',
    icon: <IconGraph size={46} />
  },
  {
    title: 'Аккаунт',
    description:
      'Прокачивайте уровень аккаунта и получайте награды для украшения своего профиля',
    icon: <IconUserPentagon size={46} />
  },
  {
    title: 'Сообщество',
    description:
      'Публикуйте новости и делитесь своими достижениями, общайтесь с друзьями',
    icon: <IconMessage size={46} />
  }
]
