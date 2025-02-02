import { useRef } from 'react'
import ReactSelect, { components } from 'react-select'

import {
  ClearIndicator,
  NoOptionsMessage,
  DropdownIndicator
} from './components'
import './select.css'
import { SelectOption, SelectProps } from './select.interface'
import { selectOnMenuClose } from './utils'

export const Select = ({
  label,
  placeholder,
  options,
  isSearchable,
  isLoading,
  onValueChange,
  value
}: SelectProps) => {
  const { current: uniqueId } = useRef(
    'select_' + Math.random().toFixed(5).slice(2)
  )

  const selectValue =
    typeof value === 'string' ? { value, label: value } : value

  const menuPortalTarget =
    typeof document === 'undefined' ? null : document.body

  return (
    <div>
      {label && <p className='select__label'>{label}</p>}
      <ReactSelect<SelectOption>
        menuPortalTarget={menuPortalTarget}
        id={uniqueId}
        value={selectValue}
        onChange={(newValue) => {
          onValueChange?.(newValue)
        }}
        onMenuClose={() => selectOnMenuClose(uniqueId)}
        isSearchable={isSearchable}
        isLoading={isLoading}
        placeholder={placeholder}
        noOptionsMessage={({ inputValue }) => {
          return <NoOptionsMessage inputValue={inputValue} />
        }}
        components={{
          ClearIndicator,
          DropdownIndicator,
          Menu: (props) => (
            <components.Menu {...props} className='select__menu' />
          )
        }}
        options={options}
        className='select'
        classNamePrefix='select'
        isClearable
        unstyled
      />
    </div>
  )
}
