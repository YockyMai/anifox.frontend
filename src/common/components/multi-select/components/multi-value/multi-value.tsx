import { UnstyledButton } from '@/common/components'
import { SetOptionActions } from '@/common/components/select/select.interface'

import './multi-value.css'
import { MultiValueProps } from './multi-value.interface'

export const MultiValue = (props: MultiValueProps) => {
  const { setValue, getValue, index, data } = props

  const selectedOptions = getValue()

  const deselectOption = (index: number) => {
    setValue(
      selectedOptions.filter((_, optionIndex) => optionIndex !== index),
      SetOptionActions.DESELECT_OPTION
    )
  }

  const deselectOther = (index: number) => {
    setValue(
      selectedOptions.filter((_, optionIndex) => optionIndex === index),
      SetOptionActions.DESELECT_OPTION
    )
  }

  if (index > 1) {
    return null
  }

  if (index === 1) {
    return (
      <UnstyledButton
        className='select__multi-value-other'
        onClick={() => deselectOther(0)}
      >
        <p>{selectedOptions.length - 1} +</p>
      </UnstyledButton>
    )
  }

  return (
    <div className='select__multi-value' onClick={() => deselectOption(index)}>
      <p className='select__multi-value__label'>{data.label}</p>
    </div>
  )
}
