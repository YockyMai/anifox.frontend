'use client'

import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'

import { AnimeStatuses } from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import { STATUS_OPTIONS } from './status.const'

export const Status = () => {
  const [status, setStatus] = useAtom($animeCatalogFilterAtoms.status)

  return (
    <div>
      <Select
        value={status}
        onValueChange={(option) =>
          setStatus(option ? (option.value as AnimeStatuses) : null)
        }
        options={STATUS_OPTIONS}
        label={'Статус'}
        placeholder={'Любой'}
      />
    </div>
  )
}
