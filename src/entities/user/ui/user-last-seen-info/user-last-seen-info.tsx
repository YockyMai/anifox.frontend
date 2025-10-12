import { formatDateDistance } from '@/common/lib/dayjs/format-date-distance'

import { UserLastSeenInfoProps } from './user-last-seen-info.interface'

export const UserLastSeenInfo = ({
  isOnline,
  lastSeen
}: UserLastSeenInfoProps) => {
  return (
    <div className='flex items-center gap-x-1.5'>
      <p className='text-xs font-bold text-orange-300 sm:text-base'>
        {isOnline
          ? 'Сейчас онлайн'
          : `Был в сети ${formatDateDistance(lastSeen)}`}
      </p>
      {isOnline && (
        <span className='relative flex size-3'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75'></span>
          <span className='relative inline-flex size-3 rounded-full bg-orange-300'></span>
        </span>
      )}
    </div>
  )
}
