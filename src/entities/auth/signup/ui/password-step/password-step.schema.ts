import { object, ref, string } from 'yup'

export const passwordSchema = object({
  password: string()
    .min(5, 'Минимальная длина пароля - 5 символов')
    .max(50, 'Максимальная длина пароля - 50 символов')
    .matches(
      /^[a-zA-Z0-9!"#$%&'()*+,\-./:;<=>?@\[\]^_{|}~]+$/,
      'Пароль должен состоять только из латинских символов'
    )
    .required()
})
