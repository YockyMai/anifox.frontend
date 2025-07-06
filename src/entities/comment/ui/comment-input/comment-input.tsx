import { Input, UnstyledButton, Image } from '@anifox/ui'
import { IconSend2 } from '@tabler/icons-react'
import { useState } from 'react'

import { DEFAULT_USER_AVATAR } from '@/entities/user'
import { $viewer } from '@/entities/viewer'

import { CommentInputProps } from './comment-input.interface'

export const CommentInput = ({ onSubmit }: CommentInputProps) => {
  const [comment, setComment] = useState('')
  const viewer = $viewer.selectors.viewer()
  return (
    <div>
      <Input
        placeholder='Напишите свой комментарий'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        icon={
          <Image
            className='rounded-full'
            width={30}
            height={30}
            src={viewer?.avatar ?? DEFAULT_USER_AVATAR}
          />
        }
        rightIcon={
          <UnstyledButton onClick={() => onSubmit?.(comment)}>
            <IconSend2 />
          </UnstyledButton>
        }
      />
    </div>
  )
}
