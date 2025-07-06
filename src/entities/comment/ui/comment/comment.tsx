import { Image } from '@anifox/ui'
import { Link } from 'react-router'

import { DEFAULT_USER_AVATAR } from '@/entities/user'
import { ROUTES } from '@/screens/pages.routes'

import { UserCommentProps } from './comment.interface'

export const UserComment = ({ comment }: UserCommentProps) => {
  return (
    <div className='flex gap-x-3'>
      <Link to={ROUTES.PROFILE.ROOT(comment.author.login)}>
        <Image
          className='h-10 w-10 rounded-full'
          src={comment.author.avatar ?? DEFAULT_USER_AVATAR}
        />
      </Link>

      <div>
        <p className='text-lg font-bold'>{comment.author.name}</p>
        <div>
          <p>{comment.comment}</p>
        </div>
      </div>
    </div>
  )
}
