import {
  InfinityLoadingContainer,
  Input,
  ScreenSection,
  useDebounce
} from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { useProfile } from '@/entities/profile'
import { UserCard } from '@/entities/user'
import { AcceptFriendInviteButton } from '@/entities/user/ui/accept-friend-invite-button'
import { RejectFriendInviteButton } from '@/entities/user/ui/reject-friend-invite-button'
import {
  FriendshipStatus,
  useFriendRequestsQuery
} from '@/graphql/generated/output'

export const FriendRequestsScreen = () => {
  const { profile } = useProfile()

  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 300)

  const { data, loading, fetchMore } = useFriendRequestsQuery({
    variables: {
      userId: profile.id,
      search: debouncedSearch
    }
  })

  const pageInfo = data?.friendRequests.pageInfo

  const friendships = data?.friendRequests.data ?? []

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
        <div className='mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3'>
          <AnimatePresence mode='popLayout'>
            {friendships.map((friendship) => (
              <motion.div
                key={friendship.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  height: 0,
                  marginBottom: 0,
                  marginTop: 0
                }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                  height: { duration: 0.3 },
                  margin: { duration: 0.3 },
                  y: { duration: 0.2 },
                  layout: { duration: 0.3, ease: 'easeInOut' }
                }}
                style={{ overflow: 'hidden' }}
              >
                <UserCard
                  user={friendship.friend}
                  actions={
                    <div className='grid grid-cols-2 gap-x-1.5'>
                      <RejectFriendInviteButton friendshipId={friendship.id} />
                      <AcceptFriendInviteButton friendshipId={friendship.id} />
                    </div>
                  }
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </InfinityLoadingContainer>
    </ScreenSection>
  )
}
