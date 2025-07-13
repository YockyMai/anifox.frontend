import { ScreenSection } from '@anifox/ui'

import { SettingsAvatar } from './settings-avatar/settings-avatar'

export const SettingsUser = () => {
  return (
    <div>
      <ScreenSection
        title='Аватар'
        description='Настройте свой аватар, он отображается в профиле, комментариях и других местах'
      >
        <SettingsAvatar />
      </ScreenSection>
    </div>
  )
}
