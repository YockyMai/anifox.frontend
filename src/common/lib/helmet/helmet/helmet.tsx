import { Helmet as ReactHelmet } from 'react-helmet-async'

import { HelmetProps } from './helmet.interface'

export const Helmet = (props: HelmetProps) => {
  const { children, helmetLoaderProps, isLoading, ...helmetProps } = props

  return (
    <ReactHelmet {...(isLoading ? helmetLoaderProps : helmetProps)}>
      {isLoading ? <title>Загрузка...</title> : children}
    </ReactHelmet>
  )
}
