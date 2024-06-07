import { Input } from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'

export const SearchButton = () => {
  return <Input icon={<IconSearch />} size='sm' placeholder='Поиск' />
}
