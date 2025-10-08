import { Button, ScreenSection } from '@anifox/ui'

export const SettingsDeleteAccount = () => {
  return (
    <ScreenSection
      title='Удаление аккаунта'
      description='Отменить это действие невозможно, при удалении аккаунта происходит полная очистка данных, без возможности восстановления.'
    >
      <Button color='red'>Удалить аккаунт</Button>
    </ScreenSection>
  )
}
