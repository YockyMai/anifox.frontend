import { Button } from '@anifox/ui'
import { IconUserPlus } from '@tabler/icons-react'

import { useAcceptFriendInviteMutation } from '@/graphql/generated/output'

import { AddFriendButtonProps } from './accept-friend-invite-button.interface'

export const AcceptFriendInviteButton = ({
  friendshipId
}: AddFriendButtonProps) => {
  const [acceptFriendInviteMutation] = useAcceptFriendInviteMutation({
    variables: {
      friendshipId
    }
  })

  return (
    <Button
      onClick={() => acceptFriendInviteMutation()}
      icon={<IconUserPlus />}
      variant='light'
      color='purple'
      size='sm'
      fullWidth
    >
      Принять заявку
    </Button>
  )
}
