import { Comment } from '../../store/comment-input.interface'

export type CommentInputProps = {
  onSubmit?: (comment: Comment) => void
  animeId: string
  parentCommentId?: string
}
