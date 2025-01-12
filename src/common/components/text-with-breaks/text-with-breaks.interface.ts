import { HTMLAttributes } from 'react'

export type TextWithBreaksProps = HTMLAttributes<HTMLParagraphElement> & {
  text: string
  separator: string
}
