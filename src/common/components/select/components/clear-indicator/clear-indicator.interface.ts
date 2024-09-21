import {
  GroupBase,
  ClearIndicatorProps as ReactSelectClearIndicatorProps
} from 'react-select'

import { SelectOption } from '../../select.interface'

export type ClearIndicatorProps<IsMulti extends boolean> =
  ReactSelectClearIndicatorProps<SelectOption, IsMulti, GroupBase<SelectOption>>
