import { object, string } from 'yup'

export const loginSchema = object({
  user_identifier: string().required('Обязательное поле'),
  password: string().required('Обязательное поле')
})
