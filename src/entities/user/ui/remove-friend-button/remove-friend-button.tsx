import { Button, toast } from '@anifox/ui'
import { IconUserMinus } from '@tabler/icons-react'

import { useProfile } from '@/entities/profile'
import {
  FriendsDocument,
  FriendshipStatus,
  useRemoveFriendMutation
} from '@/graphql/generated/output'

import { RemoveFriendButtonProps } from './remove-friend-button.interface'

export const RemoveFriendButton = ({
  friendshipId
}: RemoveFriendButtonProps) => {
  const { profile } = useProfile()

  const [removeFriendMutation] = useRemoveFriendMutation({
    variables: {
      friendshipId
    },
    onCompleted: () => {
      toast.success('Друг удален из списка')
    },
    refetchQueries: [
      {
        query: FriendsDocument,
        variables: {
          userId: profile.id,
          status: FriendshipStatus.ACCEPTED
        }
      }
    ]
  })

  return (
    <Button
      onClick={() => removeFriendMutation()}
      icon={<IconUserMinus />}
      variant='light'
      color='red'
      size='sm'
      fullWidth
    >
      Удалить из друзей
    </Button>
  )
}
