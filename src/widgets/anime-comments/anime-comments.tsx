import { Alert, InfinityLoadingContainer, UIColors } from '@anifox/ui'
import { IconAlertCircle } from '@tabler/icons-react'
import React from 'react'

import { $commentInput } from '@/entities/comment/store/comment-input.store'
import { CommentInput } from '@/entities/comment/ui/comment-input'
import { UserComment } from '@/entities/comment/ui/comment/comment'
import { useAnimeCommentsQuery } from '@/graphql/generated/output'

import { AnimeCommentsProps } from './anime-comments.interface'

export const AnimeComments = ({ animeId }: AnimeCommentsProps) => {
  const { data, fetchMore, loading } = useAnimeCommentsQuery({
    variables: {
      animeId,
      limit: 20
    },
    notifyOnNetworkStatusChange: true
  })

  const pageInfo = data?.animeComments.pageInfo
  const replyingCommentId = $commentInput.selectors.replyingCommentId()

  const fetchNextPage = () => {
    if (pageInfo) {
      fetchMore({
        variables: {
          animeId,
          page: pageInfo.page + 1,
          limit: 20
        }
      })
    }
  }

  const comments = data?.animeComments.data

  return (
    <div>
      <Alert
        className='mb-6'
        icon={<IconAlertCircle />}
        color={UIColors.ORANGE}
        title='Уважайте других участников обсуждения'
        variant='light'
      >
        Просим воздерживаться от нецензурной лексики, оскорблений, провокаций и
        любых проявлений неуважения. Комментарии, нарушающие нормы приличия и
        правила платформы, могут быть удалены, а пользователи — заблокированы.
        Давайте поддерживать конструктивный и дружелюбный диалог.
      </Alert>

      {!replyingCommentId && <CommentInput animeId={animeId} />}

      <div className='mt-6'>
        <InfinityLoadingContainer
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={loading && !!pageInfo}
          hasNextPage={pageInfo?.hasNextPage ?? true}
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
