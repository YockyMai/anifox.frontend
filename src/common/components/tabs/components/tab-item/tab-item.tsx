import { clsx } from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  cloneElement,
  DetailedHTMLProps,
  HTMLAttributes
} from 'react'

import './tab-item.css'
import { TabProps } from './tab-item.interface'

export const TabItem = forwardRef(
  (
    { children, isActive, onClick, onHover, tabKey }: TabProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const child = children as React.ReactElement & {
      props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLElement>
    }

    const { className, ...otherProps } = child.props

    return cloneElement(child, {
      ...otherProps,
      onMouseMove: () => onHover?.(tabKey),
      onClick: () => onClick(tabKey),
      className: clsx('tab-item', isActive && 'tab-item_active', className),
      ref
    })
  }
)
