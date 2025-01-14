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
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0,0,.2,1)'
    },
    extend: {
      keyframes: bootstrapKeyframes,
      animation: (utils) => ({
        'fade-in': `fade-in ${utils.theme('transitionDuration.150')} cubic-bezier(0,0,.2,1)`,
        'fade-out': `fade-out ${utils.theme('transitionDuration.150')} cubic-bezier(0,0,.2,1)`,
        'scale-in': `scale-in ease-in ${utils.theme('transitionDuration.150')} cubic-bezier(0,0,.2,1)`,
        'scale-out': `scale-out ${utils.theme('transitionDuration.150')} cubic-bezier(0,0,.2,1)`,
        slide: `slide ${utils.theme('transitionDuration.75')} infinite`,
        accordionSlideDown:
          'accordionSlideDown 150ms cubic-bezier(0.87, 0, 0.13, 1)',
        accordionSlideUp:
          'accordionSlideUp 150ms cubic-bezier(0.87, 0, 0.13, 1)'
      }),
      colors: {
        light: '#eff3f8'
      },
      container: {
        center: true,
        padding: '1rem'
      }
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    }
  },
  plugins: [scrollbar],
  darkMode: 'class'
}

export default config
