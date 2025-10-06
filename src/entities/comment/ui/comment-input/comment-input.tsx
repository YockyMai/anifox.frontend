import { Button, Editor, RichTextEditor } from '@anifox/ui'
import { IconSend2 } from '@tabler/icons-react'
import { useState } from 'react'

import {
  AnimeCommentFragment,
  AnimeCommentFragmentDoc,
  useCreateAnimeCommentMutation
} from '@/graphql/generated/output'

import { useComment } from '../../store/comment-input.selectors'
import { $commentInput } from '../../store/comment-input.store'
import { CommentInputProps } from './comment-input.interface'

export const CommentInput = ({
  animeId,
  parentCommentId,
  onSubmit
}: CommentInputProps) => {
  const [editor, setEditor] = useState<Editor | null>(null)

  const [createCommentMutation, { loading }] = useCreateAnimeCommentMutation({
    onCompleted: () => {
      $commentInput.actions.setComment({
        animeId,
        comment: {
          html: '',
          json: {},
          text: ''
        }
      })
      $commentInput.actions.setReplyingCommentId(null)
      editor?.commands.clearContent()
    },
    update: (cache, { data }) => {
      if (!data?.createAnimeComment) return

      const newComment = data.createAnimeComment

      if (parentCommentId) {
        // Ответ на комментарий
        cache.modify({
          id: cache.identify({
            __typename: 'AnimeComment',
            id: parentCommentId
          }),
          fields: {
            children(existingChildrenRefs = [], { readField }) {
              const newChildRef = cache.writeFragment({
                data: newComment,
                fragment: AnimeCommentFragmentDoc
              })

              // Проверка, чтобы не добавлять дубликат
              if (
                existingChildrenRefs.some(
                  (ref: AnimeCommentFragment) =>
                    readField('id', ref) === newComment.id
                )
              ) {
                return existingChildrenRefs
              }

              return [...existingChildrenRefs, newChildRef]
            }
          }
        })
      } else {
        cache.modify({
          fields: {
            animeComments(existingData = {}, { readField }) {
              const newCommentRef = cache.writeFragment({
                data: newComment,
                fragment: AnimeCommentFragmentDoc
              })

              const existingItems = existingData.data ?? []

              // Проверка, чтобы не добавлять дубликат
              if (
                existingItems.some(
                  (ref: AnimeCommentFragment) =>
                    readField('id', ref) === newComment.id
                )
              ) {
                return existingData
              }

              return {
                ...existingData,
                data: [newCommentRef, ...existingItems]
              }
            }
          }
        })
      }
    }
  })

  const replyingCommentId = $commentInput.selectors.replyingCommentId()
  const comment = useComment(animeId)

  const onSend = () => {
    onSubmit?.({
      html: comment.html,
      json:
        typeof comment.json === 'string'
          ? JSON.parse(comment.json)
          : comment.json,
      text: comment.text
    })

    createCommentMutation({
      variables: {
        animeId,
        parentCommentId,
        html: comment.html,
        json: JSON.stringify(comment.json),
        text: comment.text
      }
    })
  }

  return (
    <div>
      <div className='overflow-hidden rounded bg-slate-50 dark:bg-slate-800'>
        <RichTextEditor
          onEditorInit={setEditor}
          disabledFeatures={['images', 'align']}
          content={comment.json}
          onUpdateContent={(content) =>
            $commentInput.actions.setComment({
              animeId,
              comment: {
                ...comment,
                ...content
              }
            })
          }
        />
      </div>

      <div className='mt-2 flex items-center gap-x-2'>
        {replyingCommentId && (
          <Button
            size='sm'
            color='red'
            onClick={() => $commentInput.actions.setReplyingCommentId(null)}
          >
            Отмена
          </Button>
        )}
        <Button
          color='purple'
          size='sm'
          rightIcon={<IconSend2 />}
          isLoading={loading}
          onClick={onSend}
        >
          Отправить
        </Button>
      </div>
    </div>
  )
}
