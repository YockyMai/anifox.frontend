import { ResetFilters } from '../reset-filters/reset-filters'
import { Search } from '../search'
import { Status } from '../status'
import { TrackStatus } from '../track-status'
import { Type } from '../type'

export const DesktopFilter = () => {
  return (
    <div className='flex flex-col gap-y-6 pt-10'>
      <Search />
      <TrackStatus />
      <Type />
      <Status />
      <ResetFilters />
    </div>
  )
}
