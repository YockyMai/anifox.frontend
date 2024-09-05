import { object, string } from 'yup'

const LOGIN_REGEXP = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/

export const loginSchema = object({
  login: string()
    .min(3, 'Минимальная длина - 3 символа')
    .max(20, 'Максимальная длина - 20 символов')
    .lowercase('Используйте только нижний регистр')
    .matches(
      LOGIN_REGEXP,
      'Используйте только латинские символы, цифры и специальные символы'
    )
    .matches(/^[^\s]+$/, 'Пробелы не допускаются')
    .required('Обязательное поле')
})
