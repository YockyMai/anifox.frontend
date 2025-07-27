import { RichTextEditor, ScreenSection } from '@anifox/ui'

import { useProfile } from '@/entities/profile'

import { ActivityCalendar } from './activity-calendar/activity-calendar'
import { TotalStatistics } from './total-statistics/total-statistics'

export const ProfileStatistics = () => {
  const { profile } = useProfile()
  return (
    <div>
      <ScreenSection withContainer>
        <div className='grid grid-cols-2 items-center justify-between gap-x-5 max-xl:grid-cols-1'>
          <ActivityCalendar />
          <TotalStatistics />
        </div>
      </ScreenSection>

      {profile.about && (
        <ScreenSection withContainer title='Описание'>
          <div className='rounded bg-white p-10 dark:bg-slate-800'>
            <RichTextEditor mode='viewer' content={profile.about.html} />
          </div>
        </ScreenSection>
      )}
    </div>
  )
}
