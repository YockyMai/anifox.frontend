import { object, string } from 'yup'

export const nicknameSchema = object({
  nickname: string()
    .min(3, 'Минимальная длина - 3 символа')
    .max(30, 'Максимальная длина - 30 символов')
    .required('Обязательное поле')
})
