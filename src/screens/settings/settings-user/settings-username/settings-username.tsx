import { Button, Input, ScreenSection } from '@anifox/ui'
import { useState } from 'react'

import { $viewer } from '@/entities/viewer'
import { useSaveUsernameMutation } from '@/graphql/generated/output'

export const SettingsUsername = () => {
  const viewer = $viewer.selectors.viewer()!

  const [username, setUsername] = useState(viewer.name)

  const isEditable = viewer.name !== username

  const [saveUsernameMutation, { loading }] = useSaveUsernameMutation({
    variables: {
      name: username
    },
    onCompleted: (data) => {
      $viewer.actions.setName(data.saveUser.name)
    }
  })

  return (
    <ScreenSection
      title='Имя аккаунта'
      description='Настройте имя аккаунта, он отображается в профиле, комментариях и других местах.'
    >
      <Input
        variant='filled'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {(isEditable || loading) && (
        <div className='mt-3 flex gap-x-3'>
          <Button onClick={() => setUsername(viewer.name)} color='red'>
            Отмена
          </Button>
          <Button
            disabled={loading}
            isLoading={loading}
            onClick={() => saveUsernameMutation()}
          >
            Сохранить
          </Button>
        </div>
      )}
    </ScreenSection>
  )
}
