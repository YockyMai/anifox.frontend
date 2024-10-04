import { IconChevronDown } from '@tabler/icons-react'

import { UnstyledButton } from '@/common/components'

import { DropdownIndicatorProps } from './dropdown-indicator.interface'

export const DropdownIndicator = <IsMulti extends boolean>({
  innerProps,
  getValue
}: DropdownIndicatorProps<IsMulti>) => {
  if (getValue().length > 0) {
    return null
  }

  return (
    <UnstyledButton
      className='select__indicator'
      // any - так как innerProps типизирован для Div, а не для Button элемента
      {...(innerProps as any)}
    >
      <IconChevronDown size={20} />
    </UnstyledButton>
  )
}
