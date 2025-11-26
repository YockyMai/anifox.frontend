import { Button, toast } from '@anifox/ui'
import { IconUserMinus } from '@tabler/icons-react'

import { useProfile } from '@/entities/profile'
import {
  FriendInvitationsDocument,
  FriendRequestsDocument,
  useRejectFriendInviteMutation
} from '@/graphql/generated/output'

import { RejectFriendInviteButtonProps } from './reject-friend-invite-button.interface'

export const RejectFriendInviteButton = ({
  friendshipId
}: RejectFriendInviteButtonProps) => {
  const { profile } = useProfile()

  const [rejectFriendInviteMutation] = useRejectFriendInviteMutation({
    variables: {
      friendshipId
    },
    onCompleted: () => {
      toast.success('Заявка отклонена')
    },
    refetchQueries: [
      {
        query: FriendInvitationsDocument,
        variables: {
          userId: profile.id
        }
      },
      {
        query: FriendRequestsDocument,
        variables: {
          userId: profile.id
        }
      }
    ]
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
