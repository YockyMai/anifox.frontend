import { ScreenSection } from '@anifox/ui'

import { SettingsSiteTheme } from './settings-site-theme/settings-site-theme'

export const SettingsAppearance = () => {
  return (
    <ScreenSection
      title='Тема сайта'
      description='Выберите между светлой или темной темой, вы можете изменить ее в любой момент'
    >
      <SettingsSiteTheme />
    </ScreenSection>
  )
}
