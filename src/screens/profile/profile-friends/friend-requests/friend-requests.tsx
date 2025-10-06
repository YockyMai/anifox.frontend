import {
  InfinityLoadingContainer,
  Input,
  ScreenSection,
  useDebounce
} from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'

import { useProfile } from '@/entities/profile'
import { UserCard } from '@/entities/user'
import { AcceptFriendInviteButton } from '@/entities/user/ui/accept-friend-invite-button'
import { RejectFriendInviteButton } from '@/entities/user/ui/reject-friend-invite-button'
import {
  FriendshipStatus,
  useFriendshipsQuery
} from '@/graphql/generated/output'

export const FriendRequestsScreen = () => {
  const { profile } = useProfile()

  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 300)

  const { data, loading, fetchMore } = useFriendshipsQuery({
    variables: {
      userId: profile.id,
      search: debouncedSearch,
      status: FriendshipStatus.PENDING
    }
  })

  const pageInfo = data?.friendships.pageInfo

  const friendships = data?.friendships.data ?? []

  const fetchNextPage = () => {
    if (pageInfo) {
      fetchMore({
        variables: {
          page: pageInfo.page + 1,
          search: debouncedSearch,
          status: FriendshipStatus.PENDING,
          userId: profile.id
        }
      })
    }
  }

  return (
    <ScreenSection>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label='Поиск по логину или имени'
        placeholder='Поиск'
        icon={<IconSearch />}
      />

      <InfinityLoadingContainer
        fetchNextPage={fetchNextPage}
        hasNextPage={pageInfo?.hasNextPage ?? true}
        isFetchingNextPage={loading && !!pageInfo}
      >
        <div className='mt-5 grid grid-cols-1 gap-x-6 md:grid-cols-2 2xl:grid-cols-3'>
          {friendships.map((friendship) => (
            <UserCard
              key={friendship.friend.id}
              user={friendship.friend}
              actions={
                <div className='grid grid-cols-2 gap-x-1.5'>
                  <RejectFriendInviteButton friendshipId={friendship.id} />
                  <AcceptFriendInviteButton friendshipId={friendship.id} />
                </div>
              }
            />
          ))}
        </div>
      </InfinityLoadingContainer>
    </ScreenSection>
  )
}
