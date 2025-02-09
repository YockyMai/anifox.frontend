interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_URL: string
  readonly VITE_PUBLIC_PROXY_HOST?: string
  readonly VITE_HOST: string
  readonly VITE_USE_PROXY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
