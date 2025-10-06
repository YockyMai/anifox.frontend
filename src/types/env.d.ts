interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_URL: string
  readonly VITE_PUBLIC_PROXY_HOST?: string
  readonly VITE_HOST: string
  readonly VITE_USE_PROXY?: string
  readonly DEV: boolean
  readonly VITE_PUBLIC_VS_CODE_DEVTOOLS_URL?: string
  readonly VITE_PUBLIC_GRAPHQL_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
