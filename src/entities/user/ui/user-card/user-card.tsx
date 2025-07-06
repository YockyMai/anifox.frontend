import { Image } from '@anifox/ui'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { TotalStatisticsVariant } from '../../const'
import {
  DEFAULT_USER_AVATAR,
  DEFAULT_USER_BANNER
} from '../../const/images.const'
import { UserCardProps } from './user-card.interface'
import { UserStat } from './user-stat/user-stat'

export const UserCard = ({ user, actions }: UserCardProps) => {
  return (
    <div className='relative overflow-hidden rounded bg-white dark:bg-slate-800'>
      <div className='h-24 w-full overflow-hidden'>
        <Image
          alt={`${user.name} banner`}
          className='!rounded-b-none'
          src={DEFAULT_USER_BANNER}
        />
      </div>
      <div className='mx-auto -mt-10 h-20 w-20'>
        <Image
          alt={`${user.name} avatar`}
          src={user.avatar ?? DEFAULT_USER_AVATAR}
        />
      </div>
      <Link to={ROUTES.PROFILE.ROOT(user.login)}>
        <p className='mt-2 text-center text-xl font-bold text-slate-700 hover:text-orange-300 dark:text-white'>
          {user.name}
        </p>
      </Link>

      <p className='text-center text-sm'>@{user.login}</p>

      <div className='p-3'>
        <div className='grid grid-cols-3 gap-x-1.5 rounded bg-slate-100 p-2 dark:bg-slate-900'>
          <UserStat
            value={user.statistics.total.totalActivity}
            variant={TotalStatisticsVariant.TOTAL_WATCHED_ANIMES}
          />
          <UserStat
            value={user.statistics.total.totalWatchedSeconds}
            variant={TotalStatisticsVariant.TOTAL_WATCHED_SECONDS}
          />
          <UserStat
            value={user.statistics.total.totalActivity}
            variant={TotalStatisticsVariant.TOTAL_WATCHED_EPISODES}
          />
        </div>

        {actions && <div className='mt-3'>{actions}</div>}
      </div>
    </div>
  )
}
