import { Button } from '@anifox/ui'
import { IconUserMinus } from '@tabler/icons-react'

import { useRejectFriendInviteMutation } from '@/graphql/generated/output'

import { RejectFriendInviteButtonProps } from './reject-friend-invite-button.interface'

export const RejectFriendInviteButton = ({
  friendshipId
}: RejectFriendInviteButtonProps) => {
  const [rejectFriendInviteMutation] = useRejectFriendInviteMutation({
    variables: {
      friendshipId
    }
  })

  return (
    <Button
      onClick={() => rejectFriendInviteMutation()}
      icon={<IconUserMinus />}
      variant='light'
      color='red'
      size='sm'
      fullWidth
    >
      Отклонить заявку
    </Button>
  )
}
