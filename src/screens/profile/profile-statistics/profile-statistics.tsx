import { ScreenSection } from '@anifox/ui'

import { ActivityCalendar } from './activity-calendar/activity-calendar'
import { TotalStatistics } from './total-statistics/total-statistics'

export const ProfileStatistics = () => {
  return (
    <ScreenSection withContainer>
      <div className='grid grid-cols-2 items-center justify-between gap-x-5 max-xl:grid-cols-1'>
        <ActivityCalendar />
        <TotalStatistics />
      </div>
    </ScreenSection>
  )
}
