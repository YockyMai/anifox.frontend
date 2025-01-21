import { IconSearch } from '@tabler/icons-react'

import { Button, Input } from '@/common/components'
import { UIColors } from '@/common/types/ui-colors'

export const SearchButton = () => {
  return (
    <Button color={UIColors.PURPLE} icon={<IconSearch />} variant='outline'>
      Поиск
    </Button>
  )
}
