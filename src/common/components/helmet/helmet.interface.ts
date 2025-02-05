import { ReactNode } from 'react'
import { HelmetProps as ReactHelmetProps } from 'react-helmet-async'

export type HelmetProps = {
  isLoading?: boolean
  children: ReactNode

  /** Props for helmet loading state */
  helmetLoaderProps?: ReactHelmetProps
} & ReactHelmetProps
