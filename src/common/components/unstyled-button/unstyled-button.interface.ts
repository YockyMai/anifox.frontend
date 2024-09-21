import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export type UnstyledButtonProps = {
  children?: ReactNode
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
