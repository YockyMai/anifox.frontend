import { object, string } from 'yup'

export const loginSchema = object({
  user_identifier: string().required(),
  password: string().required()
})
