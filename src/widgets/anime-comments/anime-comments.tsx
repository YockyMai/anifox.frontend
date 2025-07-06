import { InfinityLoadingContainer } from '@anifox/ui'
import React from 'react'

import { CommentInput } from '@/entities/comment/ui/comment-input'
import { UserComment } from '@/entities/comment/ui/comment/comment'
import {
  useAnimeCommentsQuery,
  useCreateAnimeCommentMutation
} from '@/graphql/generated/output'

import { AnimeCommentsProps } from './anime-comments.interface'

export const AnimeComments = ({ animeId }: AnimeCommentsProps) => {
  const { data, fetchMore, loading } = useAnimeCommentsQuery({
    variables: {
      animeId
    },
    notifyOnNetworkStatusChange: true
  })

  const [createCommentMutation, { loading: createCommentLoading }] =
    useCreateAnimeCommentMutation()

  const pageInfo = data?.animeComments.pageInfo

  const fetchNextPage = () => {
    if (pageInfo) {
      fetchMore({
        variables: {
          animeId,
          page: pageInfo.page + 1
        }
      })
    }
  }

  const comments = data?.animeComments.data

  return (
    <div>
      <CommentInput
        onSubmit={(comment) => {
          createCommentMutation({
            variables: {
              animeId,
              comment
            }
          })
        }}
      />
      <div className='mt-6'>
        <InfinityLoadingContainer
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={loading}
          hasNextPage={loading && !!pageInfo}
        >
          <div className='flex flex-col gap-y-3'>
            {comments?.map((comment) => (
              <UserComment key={comment.id} comment={comment} />
            ))}
          </div>
        </InfinityLoadingContainer>
      </div>
    </div>
  )
}
