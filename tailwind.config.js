import config from '@anifox/tailwind-config'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [config],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
}
