import {
  InfinityLoadingContainer,
  Input,
  Loader,
  ScreenSection,
  useDebounce
} from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
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

      {users.length > 0 && (
        <InfinityLoadingContainer
          fetchNextPage={fetchNextPage}
          hasNextPage={pageInfo?.hasNextPage ?? true}
          isFetchingNextPage={loading && !!pageInfo}
        >
          <div className='mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3'>
            <AnimatePresence mode='popLayout'>
              {users.map((user) => (
                <motion.div
                  key={user.id}
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
                    user={user}
                    actions={<AddFriendButton friendId={user.id} />}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </InfinityLoadingContainer>
      )}

      {loading && (
        <div className='mx-auto mt-10 w-fit'>
          <Loader />
        </div>
      )}
    </ScreenSection>
  )
}
