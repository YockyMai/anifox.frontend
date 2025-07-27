import {
  InfinityLoadingContainer,
  Input,
  ScreenSection,
  useDebounce
} from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import React, { useState } from 'react'

import { UserCard } from '@/entities/user'
import { AddFriendButton } from '@/entities/user/ui/add-friend-button'
import { $viewer } from '@/entities/viewer'
import { useUsersQuery } from '@/graphql/generated/output'

export const AddFriendsScreen = () => {
  const viewer = $viewer.selectors.viewer()
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 300)

  const { data, loading, fetchMore } = useUsersQuery({
    variables: { search: debouncedSearch }
  })

  const pageInfo = data?.users.pageInfo

  const users = (data?.users.data ?? []).filter(
    (user) => user.id !== viewer?.id
  )

  const fetchNextPage = () => {
    if (pageInfo) {
      fetchMore({
        variables: {
          page: pageInfo.page + 1,
          search
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
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              actions={<AddFriendButton friendId={user.id} />}
            />
          ))}
        </div>
      </InfinityLoadingContainer>
    </ScreenSection>
  )
}
