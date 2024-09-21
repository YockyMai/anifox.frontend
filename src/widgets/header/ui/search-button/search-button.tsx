import { IconSearch } from '@tabler/icons-react'

import { Input } from '@/common/components'

export const SearchButton = () => {
  return <Input icon={<IconSearch />} size='sm' placeholder='Поиск' />
}
