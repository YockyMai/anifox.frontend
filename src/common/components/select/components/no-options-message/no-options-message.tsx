import './no-options-message.css'
import { NoOptionMessageProps } from './no-options-message.interface'

export const NoOptionsMessage = ({ noOptionsLabel }: NoOptionMessageProps) => {
  return (
    <div className='select__no-options'>
      <p>{noOptionsLabel ?? 'Ничего не найдено :('}</p>
    </div>
  )
}
