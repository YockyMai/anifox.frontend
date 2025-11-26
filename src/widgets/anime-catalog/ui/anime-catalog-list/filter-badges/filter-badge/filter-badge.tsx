import { Badge, UISizes, UnstyledButton } from '@anifox/ui'
import { IconX } from '@tabler/icons-react'

import { FilterBadgeProps } from './filter-badge.interface'

export const FilterBadge = ({
  children,
  onRemoveClick,
  className
}: FilterBadgeProps) => {
  return (
    <Badge className={className} radius={UISizes.XL}>
      <div className='flex items-center gap-x-1 p-0.5'>
        <p className='text-xs font-bold'>{children}</p>
        {onRemoveClick && (
          <UnstyledButton onClick={onRemoveClick}>
            <IconX size={12} />
          </UnstyledButton>
        )}
      </div>
    </Badge>
  )
}
