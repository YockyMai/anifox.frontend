import { Select } from '@anifox/ui'
import React, { useMemo } from 'react'

import { AnimeStatuses } from '@/services/api'

import { STATUS_OPTIONS } from './anime-status-selector.const'
import { AnimeStatusSelectorProps } from './anime-type-selector.interface'

export const AnimeStatusSelector = ({
  status,
  onChangeStatus,
  customLabel
}: AnimeStatusSelectorProps) => {
  const value = useMemo(
    () => STATUS_OPTIONS.find((option) => option.value === status),
    [status]
  )

  return (
    <Select
      value={value}
      onValueChange={(option) => {
        const newValue = option ? (option.value as AnimeStatuses) : null

        onChangeStatus(newValue)
      }}
      options={STATUS_OPTIONS}
      label={customLabel ?? 'Статус'}
      placeholder='Любой'
    />
  )
}
