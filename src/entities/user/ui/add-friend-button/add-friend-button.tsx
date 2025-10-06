import { Button } from '@anifox/ui'
import { IconUserPlus } from '@tabler/icons-react'

import {
  FriendshipFragmentDoc,
  useAddFriendMutation
} from '@/graphql/generated/output'

import { AddFriendButtonProps } from './add-friend-button.interface'

export const AddFriendButton = ({ friendId }: AddFriendButtonProps) => {
  const [addFriendMutation] = useAddFriendMutation({
    variables: {
      friendId
    },
    update: (cache, { data }) => {
      if (data) {
        // add data to cache array
        cache.modify({
          fields: {
            friends: (existingFriends) => {
              const newFriendRef = cache.writeFragment({
                data: data.addFriend,
                fragment: FriendshipFragmentDoc
              })

              return [newFriendRef, ...existingFriends]
            }
          }
        })
      }
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
    >
      Добавить в друзья
    </Button>
  )
}
