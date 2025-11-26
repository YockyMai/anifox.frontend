import { HTMLAttributes, ReactNode } from 'react'

export type FilterBadgeProps = {
  children: ReactNode
  onRemoveClick?: () => void
  className?: HTMLAttributes<HTMLDivElement>['className']
}
