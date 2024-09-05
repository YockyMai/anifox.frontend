import { object, string } from 'yup'

export const emailSchema = object({
  email: string().email('Неверный формат email').required('Обязательное поле')
})
