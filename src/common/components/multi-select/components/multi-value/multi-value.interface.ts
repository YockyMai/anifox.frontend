import {
  GroupBase,
  MultiValueProps as ReactSelectMultiValueProps
} from 'react-select'

import { SelectOption } from '@/common/components/select/select.interface'

export type MultiValueProps = ReactSelectMultiValueProps<
  SelectOption,
  true,
  GroupBase<SelectOption>
>
