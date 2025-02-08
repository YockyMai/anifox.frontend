import { object, string } from 'yup'

const LOGIN_REGEXP = /^[a-zA-Z][a-zA-Z0-9_]+$/

export const loginSchema = object({
  login: string()
    .min(4, 'Минимальная длина - 4 символа')
    .max(15, 'Максимальная длина - 15 символов')
    .matches(/^[^\s]+$/, 'Пробелы не допускаются')
    .matches(
      LOGIN_REGEXP,
      'Используйте только латинские символы, цифры и нижнее подчёркивание'
    )
    .required('Обязательное поле')
})
