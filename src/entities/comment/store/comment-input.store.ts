import { createStore } from '@anifox/store'

import { Comment, CommentInputStore } from './comment-input.interface'

const initialState: CommentInputStore = {
  comments: [],
  replyingCommentId: null
}

export const $commentInput = createStore(
  initialState,
  {
    setReplyingCommentId: (state, payload: string | null) => {
      state.replyingCommentId = payload
    },
    setComment: (state, payload: { animeId: string; comment: Comment }) => {
      // state.comments.set(payload.animeId, payload.comment)
      const comment = state.comments.find(
        ({ animeId }) => animeId === payload.animeId
      )

      if (comment) {
        comment.animeId = payload.animeId
        comment.html = payload.comment.html
        comment.json = payload.comment.json
        comment.text = payload.comment.text
      } else {
        state.comments.push({
          animeId: payload.animeId,
          ...payload.comment
        })
      }
    }
  },
  {
    persist: {
      name: 'anime-comments'
    }
  }
)
