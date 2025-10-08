import { Alert } from '@anifox/ui'
import { IconAlertCircle } from '@tabler/icons-react'

import { SettingsDangerZoneProps } from './settings-danger-zone.interface'

export const SettingsDangerZone = ({ children }: SettingsDangerZoneProps) => {
  return (
    <Alert
      icon={<IconAlertCircle />}
      className='my-5'
      color='red'
      variant='outline'
      title='Опасная зона настроек'
    >
      {children}
    </Alert>
  )
}
