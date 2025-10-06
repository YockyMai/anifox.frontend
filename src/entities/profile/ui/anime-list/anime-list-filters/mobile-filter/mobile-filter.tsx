import { UnstyledButton } from '@anifox/ui'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useState } from 'react'

import { ResetFilters } from '../reset-filters/reset-filters'
import { Search } from '../search'
import { Status } from '../status'
import { TrackStatus } from '../track-status'
import { Type } from '../type'

export const MobileFilter = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div>
      <div className='grid grid-cols-[1fr_auto] items-end gap-x-3'>
        <Search />

        <UnstyledButton
          onClick={() => setIsOpened((prev) => !prev)}
          className='flex h-[40px] w-[40px] items-center justify-center rounded bg-white dark:bg-slate-800'
        >
          {isOpened ? <IconX /> : <IconMenu2 />}
        </UnstyledButton>
      </div>

      {isOpened && (
        <div className='flex flex-col gap-y-6 pt-6'>
          <TrackStatus />
          <Type />
          <Status />
          <ResetFilters />
        </div>
      )}
    </div>
  )
}
