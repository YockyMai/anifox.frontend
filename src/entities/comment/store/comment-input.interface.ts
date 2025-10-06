import { JSONContent } from '@anifox/ui'

export type Comment = {
  text: string
  html: string
  json: JSONContent
}

export type CommentInputStore = {
  comments: (Comment & { animeId: string })[]
  replyingCommentId: string | null
}
