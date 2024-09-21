import type { Preview } from '@storybook/react'

import { SiteThemes } from './../src/common/types/site-theme'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'slate',
      values: [
        {
          name: 'slate',
          value: '#eff3f8'
        },
        {
          name: 'facebook',
          value: '#0f172a'
        }
      ]
    }
  },
  globalTypes: {
    theme: {
      description: 'App theme',
      icon: 'theme',
      defaultValue: SiteThemes.LIGHT,
      toolbar: {
        title: 'Theme',
        icon: 'circle',
        items: [
          {
            value: SiteThemes.LIGHT,
            title: 'Light'
          },
          {
            value: SiteThemes.DARK,
            title: 'Dark'
          }
        ],
        dynamicTitle: true
      }
    }
  }
}

export default preview
