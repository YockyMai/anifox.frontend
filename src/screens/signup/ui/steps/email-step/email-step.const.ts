import { string } from 'yup'

export const emailSchema = string()
  .email('Неверный формат email')
  .max(255)
  .required('Обязательное поле')
