import { Schema, ValidationError } from 'yup'

export const validateSchema = (schema: Schema, value: any) => {
  let isValid = false
  let error: ValidationError | null = null

  try {
    schema.validateSync(value, { abortEarly: false })
    isValid = true
  } catch (e) {
    if (e instanceof ValidationError) {
      isValid = false
      error = e
    }
  }

  return {
    isValid,
    error
  }
}
