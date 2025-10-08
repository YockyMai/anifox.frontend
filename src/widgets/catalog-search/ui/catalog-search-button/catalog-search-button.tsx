import { UnstyledButton } from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'

import { $catalogSearch } from '../../store'

export const CatalogSearchButton = () => {
  return (
    <UnstyledButton
      onClick={() => $catalogSearch.actions.toggleIsOpened()}
      className='flex w-full items-center gap-x-2 rounded bg-slate-900 py-1.5 pl-4 pr-5'
    >
      <IconSearch className='stroke-slate-400' />
      <p className='text-sm font-bold text-slate-400'>Поиск аниме</p>
    </UnstyledButton>
  )
}
