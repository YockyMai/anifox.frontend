import { useInterval } from '@anifox/ui'

import { useUpdateUserLastSeenMutation } from '@/graphql/generated/output'

export const ViewerLastSeenUpdater = () => {
  const [updateViewerLastSeen] = useUpdateUserLastSeenMutation({
    onCompleted() {}
  })

  useInterval(() => {
    updateViewerLastSeen()
  }, 10000)

  return null
}
