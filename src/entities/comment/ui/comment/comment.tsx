import { Badge, Button, Image, RichTextEditor } from '@anifox/ui'
import { IconCornerUpLeft } from '@tabler/icons-react'
import { Link } from 'react-router'

import { formatDateDistance } from '@/common/lib/dayjs/format-date-distance'
import { DEFAULT_USER_AVATAR } from '@/entities/user'
import { ROUTES } from '@/screens/pages.routes'

import { $commentInput } from '../../store/comment-input.store'
import { CommentInput } from '../comment-input'
import { CommentLikes } from './comment-likes'
import { UserCommentProps } from './comment.interface'

export const UserComment = ({ comment }: UserCommentProps) => {
  const replyingCommentId = $commentInput.selectors.replyingCommentId()

  return (
    <div className='grid grid-cols-[50px_auto] gap-x-3'>
      <Link to={ROUTES.PROFILE.ROOT(comment.author.login)}>
        <Image
          className='h-[50px] w-[50px] rounded-full'
          src={comment.author.avatar ?? DEFAULT_USER_AVATAR}
        />
      </Link>

      <div>
        <div className='flex flex-wrap items-baseline gap-x-2'>
          <p className='text-lg font-bold'>{comment.author.name}</p>
          {comment.parent && (
            <Badge variant='light' color='green'>
              <div className='flex items-center gap-x-1'>
                <IconCornerUpLeft size={14} />
                <div>
                  Ответил <b>{comment.parent.author.name}</b>
                </div>
              </div>
            </Badge>
          )}
          <p className='text-sm text-slate-400'>
            {formatDateDistance(comment.createdAt)}
          </p>
        </div>
        <div>
          <RichTextEditor content={comment.html} mode='viewer' />

          <div className='mt-2'>
            {replyingCommentId === comment.id ? (
              <CommentInput
                animeId={comment.animeId}
                parentCommentId={comment.id}
              />
            ) : (
              <div className='flex items-center gap-x-4'>
                <CommentLikes comment={comment} />

                <Button
                  onClick={() =>
                    $commentInput.actions.setReplyingCommentId(comment.id)
                  }
                  color='purple'
                  size='sm'
                  variant='light'
                >
                  Ответить
                </Button>
              </div>
            )}
          </div>
        </div>

        {comment.children.length > 0 && (
          <div className='mt-5 flex flex-col gap-y-5 border-l-2 border-l-black/10 pl-3 dark:border-l-white/10'>
            {comment.children.map((children) => (
              <UserComment
                key={children.id}
                comment={{ ...children, children: [] }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
