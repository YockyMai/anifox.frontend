import { Button, toast } from '@anifox/ui'
import { IconUserPlus } from '@tabler/icons-react'
import { useState } from 'react'

import { useAddFriendMutation } from '@/graphql/generated/output'

import { AddFriendButtonProps } from './add-friend-button.interface'

export const AddFriendButton = ({ friendId }: AddFriendButtonProps) => {
  const [requestSent, setRequestSent] = useState(false)

  const [addFriendMutation] = useAddFriendMutation({
    variables: {
      friendId
    },
    onCompleted: () => {
      setRequestSent(true)
      toast.success('Заявка отправлена')
    }
  })

  return (
    <Button
      onClick={() => addFriendMutation()}
      icon={<IconUserPlus />}
      variant='light'
      color='purple'
      size='sm'
      fullWidth
      disabled={requestSent}
    >
      {requestSent ? 'Заявка отправлена' : 'Добавить в друзья'}
    </Button>
  )
}
