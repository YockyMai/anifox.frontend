import { Button, toast } from '@anifox/ui'
import { IconUserPlus } from '@tabler/icons-react'

import { useProfile } from '@/entities/profile'
import {
  FriendInvitationsDocument,
  FriendRequestsDocument,
  FriendsDocument,
  useAcceptFriendInviteMutation
} from '@/graphql/generated/output'

import { AddFriendButtonProps } from './accept-friend-invite-button.interface'

export const AcceptFriendInviteButton = ({
  friendshipId
}: AddFriendButtonProps) => {
  const { profile } = useProfile()

  const [acceptFriendInviteMutation] = useAcceptFriendInviteMutation({
    variables: {
      friendshipId
    },
    onCompleted: () => {
      toast.success('Заявка принята')
    },
    refetchQueries: () => [
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
      },
      {
        query: FriendsDocument,
        variables: {
          userId: profile.id
        }
      }
    ]
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
