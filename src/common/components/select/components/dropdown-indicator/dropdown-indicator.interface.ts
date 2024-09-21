import {
  GroupBase,
  DropdownIndicatorProps as ReactSelectDropdownIndicatorProps
} from 'react-select'

import { SelectOption } from '../../select.interface'

export type DropdownIndicatorProps<IsMulti extends boolean> =
  ReactSelectDropdownIndicatorProps<
    SelectOption,
    IsMulti,
    GroupBase<SelectOption>
  >
