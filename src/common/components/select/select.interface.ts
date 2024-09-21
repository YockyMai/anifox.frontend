export type SelectProps = {
  placeholder?: string
  label?: string
  value?: SelectOption | string | null
  onValueChange?: (option: SelectOption | null) => void
  options: SelectOption[]
  isSearchable?: boolean
  isLoading?: boolean
}

export type SelectOption = {
  value: string
  label: string
}

export enum SetOptionActions {
  DESELECT_OPTION = 'deselect-option',
  SELECT_OPTION = 'select-option'
}
