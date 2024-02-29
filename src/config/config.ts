import { EnvKeys, EnvKey } from './config.interface'

/**
 * @remark
 * @module
 * @throwable
 */
const getEnvVar = (key: EnvKey): string => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return import.meta.env[key] || ''
}

export const LIGHTBOX_LICENSE_KEY = getEnvVar(EnvKeys.LIGHTBOX_LICENSE_KEY)
export const NODE_ENV = getEnvVar(EnvKeys.NODE_ENV)

export const IS_DEV_MODE = Boolean(getEnvVar(EnvKeys.IS_DEV_MODE))
export const IS_PROD_MODE = Boolean(getEnvVar(EnvKeys.IS_PROD_MODE))

export const API_URL = getEnvVar(
  IS_DEV_MODE ? EnvKeys.APP_DEV_API_URL : EnvKeys.APP_API_URL,
)
