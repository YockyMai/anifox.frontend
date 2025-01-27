'use client'

import { useRef } from 'react'
import ReactSelect, { components } from 'react-select'

import { NoSSR } from '../no-ssr'
import {
  ClearIndicator,
  DropdownIndicator,
  NoOptionsMessage
} from '../select/components'
import { selectOnMenuClose } from '../select/utils'
import { MultiValue } from './components'
import './multi-select.css'
import { MultiSelectProps } from './multi-select.interface'

export const MultiSelect = ({
  label,
  placeholder,
  options,
  isSearchable,
  isLoading,
  onValuesChange,
  values
}: MultiSelectProps) => {
  const { current: uniqueId } = useRef(
    'select_' + Math.random().toFixed(5).slice(2)
  )

  const multiSelectValues = values?.map((value) =>
    typeof value === 'string' ? { value, label: value } : value
  )

  const menuPortalTarget =
    typeof document === 'undefined' ? null : document.body

  return (
    <NoSSR>
      {label && <p className='multi-select__label'>{label}</p>}
      <ReactSelect
        menuPortalTarget={menuPortalTarget}
        id={uniqueId}
        onMenuClose={() => selectOnMenuClose(uniqueId)}
        value={multiSelectValues}
        onChange={(options) =>
          onValuesChange?.(
            options.map(({ label, value }) => ({ label, value }))
          )
        }
        isSearchable={isSearchable}
        isLoading={isLoading}
        placeholder={placeholder}
        noOptionsMessage={({ inputValue }) => {
          return <NoOptionsMessage inputValue={inputValue} />
        }}
        components={{
          ClearIndicator: ClearIndicator<true>,
          DropdownIndicator: DropdownIndicator<true>,
          MultiValue,
          Menu: (props) => (
            <components.Menu {...props} className='select__menu' />
          )
        }}
        options={options}
        className='select'
        classNamePrefix='select'
        isClearable
        unstyled
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        isMulti
      />
    </NoSSR>
  )
}
