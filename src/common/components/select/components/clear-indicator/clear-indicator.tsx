import { IconX } from '@tabler/icons-react'

import { UnstyledButton } from '@/common/components'

import { ClearIndicatorProps } from './clear-indicator.interface'

export const ClearIndicator = <IsMulti extends boolean = false>({
  innerProps
}: ClearIndicatorProps<IsMulti>) => {
  return (
    <UnstyledButton
      className='select__indicator'
      // any - так как innerProps типизирован для div, а не для button элемента
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(innerProps as any)}
    >
      <IconX size={20} />
    </UnstyledButton>
  )
}
