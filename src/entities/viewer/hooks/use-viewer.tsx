import { useViewerQuery } from '@/graphql/generated/output'

export const useViewer = () => {
  const { data } = useViewerQuery()

  const viewer = data?.viewer

  const isAuth = !!viewer

  return { viewer, isAuth }
}
