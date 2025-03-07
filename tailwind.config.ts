import tailwindConfig from '@anifox/tailwind-config'
import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [tailwindConfig],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}

export default config
