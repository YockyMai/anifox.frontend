import { atom } from 'jotai'

import { AnimeScheduleDay } from '@/services/api'

import { getCurrentDayOfWeek } from '../helpers'

export const selectedDayAtom = atom<AnimeScheduleDay>(getCurrentDayOfWeek())
