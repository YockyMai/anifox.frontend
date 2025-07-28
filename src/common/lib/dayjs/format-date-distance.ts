import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('ru')

export const formatDateDistance = (date: Date) => {
  return dayjs(date).fromNow()
}
