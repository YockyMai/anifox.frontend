import { CalendarDatum, ResponsiveCalendar } from '@nivo/calendar'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { useAtomValue } from 'jotai'
import React from 'react'

import { $siteThemeAtom } from '@/common/store/site-theme'
import { SITE_THEME } from '@/common/types/site-theme'
import { useProfile } from '@/entities/profile'
import { useUserStatisticsQuery } from '@/graphql/generated/output'

export const ActivityCalendar = () => {
  const theme = useAtomValue($siteThemeAtom)

  const bgColor = theme === SITE_THEME.DARK ? '#1e293b' : '#ffffff'

  const { profile } = useProfile()

  const { data } = useUserStatisticsQuery({
    variables: {
      userId: profile.id,
      year: new Date().getFullYear()
    }
  })

  const calendarData: CalendarDatum[] =
    data?.userStatistics.activity.days.map(({ day, count }) => ({
      day: dayjs(day).format('YYYY-MM-DD'),
      value: count
    })) ?? []

  if (!calendarData.length) {
    return null
  }

  return (
    <div className='rounded'>
      <p className='mb-2 text-xl font-bold'>
        Календарь активности за {new Date().getFullYear()} год
      </p>
      <div className='h-[160px] rounded bg-white px-5 pt-6 drop-shadow-sm dark:bg-slate-800'>
        <ResponsiveCalendar
          data={calendarData.filter(({ value }) => value)}
          from={calendarData[0].day}
          to={calendarData[calendarData.length - 1].day}
          emptyColor={theme === SITE_THEME.LIGHT ? '#EFF3F8' : '#111827'}
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          monthBorderColor={bgColor}
          dayBorderWidth={2}
          theme={{
            text: {
              fontFamily: 'Nunito, sans-serif',
              fontSize: 14,
              fill: theme === SITE_THEME.DARK ? '#FFFFFF' : '#64748B'
            }
          }}
          tooltip={({ color, day, value }) => {
            return (
              <div className='overflow-hidden rounded bg-slate-100 drop-shadow-2xl'>
                <div
                  style={{ backgroundColor: color }}
                  className='h-3 w-full'
                />

                <div className='flex flex-col items-center gap-y-1.5 p-2'>
                  <p>Активностей</p>
                  <div
                    style={{ backgroundColor: color }}
                    className='flex aspect-square h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full'
                  >
                    <p className='text-xs text-white'>{value}</p>
                  </div>
                  <p className='text-center text-sm'>
                    за {dayjs(day).locale('ru').format('DD MMMM')}
                  </p>
                </div>
              </div>
            )
          }}
          monthLegend={(year, month) =>
            dayjs(new Date(year, month)).locale('ru').format('MMM')
          }
          dayBorderColor={theme === SITE_THEME.DARK ? '#1e293b' : 'white'}
        />
      </div>
    </div>
  )
}
