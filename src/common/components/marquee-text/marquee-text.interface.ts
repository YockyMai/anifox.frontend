import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export type MarqueeTextProps = {
  children: ReactNode
  speed?: number
  pause?: number
  gap?: number
  paddingX?: number
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
