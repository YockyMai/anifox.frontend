import { config } from '@anifox/ui/dist/core/tailwind/config'

console.log(config)

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
}
