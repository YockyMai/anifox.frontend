import {
  Button,
  InfinityLoadingContainer,
  Input,
  ScreenSection,
  useDebounce
} from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { useProfile } from '@/entities/profile'
import { UserCard } from '@/entities/user'
import {
  FriendshipStatus,
  useFriendshipsQuery
} from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

export const UserFriendsScreen = () => {
  const { profile } = useProfile()

  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 300)

  const { data, loading, fetchMore } = useFriendshipsQuery({
    variables: {
      userId: profile.id,
      search: debouncedSearch,
      status: FriendshipStatus.ACCEPTED
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
          status: FriendshipStatus.ACCEPTED,
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

      {friendships.length ? (
        <InfinityLoadingContainer
          fetchNextPage={fetchNextPage}
          hasNextPage={pageInfo?.hasNextPage ?? true}
          isFetchingNextPage={loading && !!pageInfo}
        >
          <div className='mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3'>
            {friendships.map((friendship) => (
              <UserCard
                key={friendship.friend.id}
                user={friendship.friend}
                // actions={
                //   <AcceptFriendInviteButton friendshipId={friendship.id} />
                // }
              />
            ))}
          </div>
        </InfinityLoadingContainer>
      ) : (
        <div className='mt-10 flex flex-col items-center justify-center gap-y-3'>
          <p>У вас пока нет друзей</p>
          <Link to={ROUTES.PROFILE.FRIENDS.ADD(profile.login)}>
            <Button icon={<IconSearch />} color='orange' variant='outline'>
              Найти новых друзей
            </Button>
          </Link>
        </div>
      )}
    </ScreenSection>
  )
}
