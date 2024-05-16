export enum EnvKeys {
  LIGHTBOX_LICENSE_KEY = 'VITE_REACT_LIGHTBOX_LICENSE_KEY',
  NODE_ENV = 'MODE',
  IS_DEV_MODE = 'DEV',
  IS_PROD_MODE = 'PROD',
  APP_DEV_API_URL = 'VITE_REACT_APP_DEV_API_URL',
  APP_API_URL = 'VITE_REACT_APP_API_URL',
  PROXY_HOST = 'VITE_REACT_PROXY_HOST'
}

export type EnvKey =
  | 'VITE_REACT_LIGHTBOX_LICENSE_KEY'
  | 'MODE'
  | 'DEV'
  | 'PROD'
  | 'VITE_REACT_APP_DEV_API_URL'
  | 'VITE_REACT_APP_API_URL'
  | 'VITE_REACT_PROXY_HOST'
