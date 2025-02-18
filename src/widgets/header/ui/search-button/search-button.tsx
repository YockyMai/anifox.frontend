import { Button, Input } from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'

import { UIColors } from '@/common/types/ui-colors'

export const SearchButton = () => {
  return (
    <Button color={UIColors.PURPLE} icon={<IconSearch />} variant='outline'>
      Поиск
    </Button>
  )
}
