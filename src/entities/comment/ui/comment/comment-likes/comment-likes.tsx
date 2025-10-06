import { UnstyledButton } from '@anifox/ui'
import { IconThumbDownFilled, IconThumbUpFilled } from '@tabler/icons-react'
import clsx from 'clsx'
import React from 'react'

import { $viewer } from '@/entities/viewer'
import {
  useToggleAnimeCommentDislikeMutation,
  useToggleAnimeCommentLikeMutation
} from '@/graphql/generated/output'

import { CommentLikesProps } from './comment-likes.interface'

export const CommentLikes = ({ comment }: CommentLikesProps) => {
  const viewer = $viewer.selectors.viewer()

  const [toggleLikeMutation, { loading: toggleLikeMutationLoading }] =
    useToggleAnimeCommentLikeMutation()

  const [toggleDislikeMutation, { loading: toggleDislikeMutationLoading }] =
    useToggleAnimeCommentDislikeMutation()

  const isLiked = comment.likes.data.some((like) => like.userId === viewer?.id)
  const isDisliked = comment.dislikes.data.some(
    (dislike) => dislike.userId === viewer?.id
  )

  const toggleLike = async () => {
    if (!viewer?.id || toggleLikeMutationLoading) return

    await toggleLikeMutation({
      variables: {
        animeCommentId: comment.id
      },
      update: (cache, { data }) => {
        if (!data?.toggleAnimeCommentLike) return

        const commentId = data.toggleAnimeCommentLike.animeCommentId

        cache.modify({
          id: cache.identify({ __typename: 'AnimeComment', id: commentId }),
          fields: {
            likes(existing = { data: [], pageInfo: {} }) {
              const newLike = {
                __typename: 'AnimeCommentLike',
                userId: viewer.id
              }

              return {
                ...existing,
                data: isLiked
                  ? existing.data.filter(
                      (like: { userId: string }) => like.userId !== viewer.id
                    )
                  : [...existing.data, newLike],
                pageInfo: {
                  ...existing.pageInfo,
                  totalCount:
                    (existing.pageInfo?.totalCount ?? 0) + (isLiked ? -1 : 1)
                }
              }
            },
            dislikes(existing = { data: [], pageInfo: {} }) {
              if (isDisliked) {
                return {
                  ...existing,
                  data: existing.data.filter(
                    (dislike: { userId: string }) =>
                      dislike.userId !== viewer.id
                  ),
                  pageInfo: {
                    ...existing.pageInfo,
                    totalCount: (existing.pageInfo?.totalCount ?? 0) - 1
                  }
                }
              }

              return existing
            }
          }
        })
      }
    })
  }

  const toggleDislike = async () => {
    if (!viewer?.id || toggleDislikeMutationLoading) return

    await toggleDislikeMutation({
      variables: {
        animeCommentId: comment.id
      },
      update: (cache, { data }) => {
        if (!data?.toggleAnimeCommentDislike) return

        const commentId = data.toggleAnimeCommentDislike.animeCommentId

        cache.modify({
          id: cache.identify({ __typename: 'AnimeComment', id: commentId }),
          fields: {
            dislikes(existing = { data: [], pageInfo: {} }) {
              const newDislike = {
                __typename: 'AnimeCommentDislike',
                userId: viewer.id
              }

              return {
                ...existing,
                data: isDisliked
                  ? existing.data.filter(
                      (dislike: { userId: string }) =>
                        dislike.userId !== viewer.id
                    )
                  : [...existing.data, newDislike],
                pageInfo: {
                  ...existing.pageInfo,
                  totalCount:
                    (existing.pageInfo?.totalCount ?? 0) + (isDisliked ? -1 : 1)
                }
              }
            },
            likes(existing = { data: [], pageInfo: {} }) {
              if (isLiked) {
                return {
                  ...existing,
                  data: existing.data.filter(
                    (like: { userId: string }) => like.userId !== viewer.id
                  ),
                  pageInfo: {
                    ...existing.pageInfo,
                    totalCount: (existing.pageInfo?.totalCount ?? 0) - 1
                  }
                }
              }

              return existing
            }
          }
        })
      }
    })
  }

  return (
    <div className='flex items-center gap-x-2'>
      <UnstyledButton disabled={toggleLikeMutationLoading} onClick={toggleLike}>
        <div className='flex items-baseline'>
          <IconThumbUpFilled
            className={clsx(
              isLiked && 'fill-green-500 dark:fill-green-400',
              'transition-colors'
            )}
          />
          {comment.likes.data.length > 0 && (
            <div className='-ml-0.5 flex items-center justify-center rounded-full bg-slate-500 px-2 py-0.5'>
              <p className='text-xs font-bold text-white'>
                {comment.likes.data.length}
              </p>
            </div>
          )}
        </div>
      </UnstyledButton>
      <UnstyledButton
        disabled={toggleDislikeMutationLoading}
        onClick={toggleDislike}
      >
        <div className='flex items-baseline'>
          <IconThumbDownFilled
            className={clsx(isDisliked && 'fill-red-400', 'transition-colors')}
          />
          {comment.dislikes.data.length > 0 && (
            <div className='-ml-0.5 flex items-center justify-center rounded-full bg-slate-500 px-2 py-0.5'>
              <p className='text-xs font-bold text-white'>
                {comment.dislikes.data.length}
              </p>
            </div>
          )}
        </div>
      </UnstyledButton>
    </div>
  )
}
