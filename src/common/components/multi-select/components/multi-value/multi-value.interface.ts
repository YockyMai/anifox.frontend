import {
  GroupBase,
  MultiValueProps as ReactSelectMultiValueProps
} from 'react-select'

import { SelectOption } from '@/components/select/select.interface'

export type MultiValueProps = ReactSelectMultiValueProps<
  SelectOption,
  true,
  GroupBase<SelectOption>
>
