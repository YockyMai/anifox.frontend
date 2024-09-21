import type { Config } from 'tailwindcss'

import { bootstrapKeyframes } from './src/styles/tailwind/keyframes'
import { scrollbar } from './src/styles/tailwind/plugins'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: bootstrapKeyframes,
      animation: (utils) => ({
        'fade-in': `fade-in ${utils.theme('transitionDuration.75')} ease-in`,
        'fade-out': `fade-out ${utils.theme('transitionDuration.75')} ease-out`,
        'scale-in': `scale-in ease-in ${utils.theme('transitionDuration.75')} ease-in`,
        'scale-out': `scale-out ${utils.theme('transitionDuration.75')} ease-out`,
        ripple: `ripple`,
        slide: `slide ${utils.theme('transitionDuration.75')} infinite`
      }),
      colors: {
        light: '#eff3f8'
      }
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif']
    }
  },
  plugins: [scrollbar],
  darkMode: 'class'
}

export default config
