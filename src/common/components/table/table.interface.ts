import { ReactNode } from 'react'

export type Columns<T extends Record<string, ReactNode>> = T

export type Row<T extends Record<string, ReactNode>> = {
  [K in keyof T]: ReactNode
}

export type TableProps<T extends Record<string, ReactNode>> = {
  columns: Columns<T>
  rows: Row<T>[]
  maxHeight?: number
  rowHeight?: number
}
