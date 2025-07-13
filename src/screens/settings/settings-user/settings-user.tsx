import { ScreenSection } from '@anifox/ui'

import { SettingsAvatar } from './settings-avatar/settings-avatar'
import { SettingsBanner } from './settings-banner/settings-banner'

export const SettingsUser = () => {
  return (
    <div>
      <ScreenSection
        title='Аватар'
        description='Настройте свой аватар, он отображается в профиле, комментариях и других местах.'
      >
        <SettingsAvatar />
      </ScreenSection>

      <ScreenSection
        title='Баннер'
        description='Изображение баннера аккаунта должно быть гарзонтального формата. Если вы загрузите изображение, например, с соотношением сторон 1 / 1, то оно будет обрезано.'
      >
        <SettingsBanner />
      </ScreenSection>
    </div>
  )
}
