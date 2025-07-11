import { $commentInput } from './comment-input.store'

export const useComment = (animeId: string) => {
  const comments = $commentInput.selectors.comments()

  const comment = comments.find((comment) => comment.animeId === animeId) ?? {
    animeId: animeId,
    html: '',
    json: '',
    text: '',
    replyingComment: null
  }

  return comment
}
