import { Alert, ScreenSection } from '@anifox/ui'

import { $viewer } from '@/entities/viewer'
import { ROUTES } from '@/screens/pages.routes'

import { SettingsDangerZone } from '../settings-danger-zone/settings-danger-zone'
import { SettingsAvatar } from './settings-avatar/settings-avatar'
import { SettingsBanner } from './settings-banner/settings-banner'
import { SettingsChangePassword } from './settings-change-password/settings-change-password'
import { SettingsConnectedServices } from './settings-connected-services/settings-connected-services'
import { SettingsDeleteAccount } from './settings-delete-account/settings-delete-account'
import { SettingsLogin } from './settings-login/settings-login'
import { SettingsUserAbout } from './settings-user-about/settings-user-about'
import { SettingsUsername } from './settings-username/settings-username'

export const SettingsUser = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      {/* <ScreenSection
        title='Интеграции'
        description='Подключите другие сервисы, чтобы синхронизироваться с ними.'
      >
        <SettingsConnectedServices />
      </ScreenSection> */}

      <SettingsUsername />

      {/* <ScreenSection
        title='Логин'
        description={`Настройте ваш логин, он участвует в ссылке на аккаунт, например ${import.meta.env.VITE_HOST}${ROUTES.PROFILE.ROOT(viewer!.login)}`}
      >
        <SettingsLogin />
      </ScreenSection> */}

      <SettingsAvatar />

      <SettingsBanner />

      <SettingsUserAbout />

      <SettingsChangePassword />

      <SettingsDangerZone>
        <SettingsDeleteAccount />
      </SettingsDangerZone>
    </div>
  )
}
