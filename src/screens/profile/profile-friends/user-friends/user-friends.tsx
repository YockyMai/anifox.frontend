import {
  Button,
  InfinityLoadingContainer,
  Input,
  Loader,
  ScreenSection,
  useDebounce
} from '@anifox/ui'
import { IconSearch } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router'

import { useProfile } from '@/entities/profile'
import { UserCard } from '@/entities/user'
import { RemoveFriendButton } from '@/entities/user/ui/remove-friend-button'
import { FriendshipStatus, useFriendsQuery } from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

export const UserFriendsScreen = () => {
  const { profile } = useProfile()

  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 300)

  const { data, loading, fetchMore } = useFriendsQuery({
    variables: {
      userId: profile.id,
      search: debouncedSearch
    }
  })

  const pageInfo = data?.friends.pageInfo

  const friendships = data?.friends.data ?? []

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
                      <RemoveFriendButton friendshipId={friendship.id} />
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </InfinityLoadingContainer>
      ) : (
        <div className='mt-10 flex flex-col items-center justify-center gap-y-3'>
          {loading ? (
            <Loader />
          ) : (
            <>
              {debouncedSearch ? (
                <p>По вашему запросу ничего не найдено :(</p>
              ) : (
                <>
                  <p>У вас пока нет друзей</p>
                  <Link to={ROUTES.PROFILE.FRIENDS.ADD(profile.login)}>
                    <Button
                      icon={<IconSearch />}
                      color='orange'
                      variant='outline'
                    >
                      Найти новых друзей
                    </Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      )}
    </ScreenSection>
  )
}
