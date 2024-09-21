import { SelectOption } from '../select/select.interface'

export type MultiSelectProps = {
  placeholder?: string
  label?: string
  values?: (SelectOption | string)[]
  onValuesChange?: (option: SelectOption[]) => void
  options: SelectOption[]
  isSearchable?: boolean
  isLoading?: boolean
}
