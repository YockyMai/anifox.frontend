import { Helmet as ReactHelmet } from 'react-helmet-async'

import { HelmetProps } from './helmet.interface'

export const Helmet = (props: HelmetProps) => {
  const { children, helmetLoaderProps, isLoading, ...helmetProps } = props

  if (isLoading) {
    return (
      <ReactHelmet titleTemplate='%s' {...helmetLoaderProps}>
        <title>Загрузка...</title>
      </ReactHelmet>
    )
  }

  return <ReactHelmet {...helmetProps}>{children}</ReactHelmet>
}
