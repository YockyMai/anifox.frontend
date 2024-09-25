import { object, date } from 'yup'

export const birthdaySchema = object({
  birthday: date().optional()
})
