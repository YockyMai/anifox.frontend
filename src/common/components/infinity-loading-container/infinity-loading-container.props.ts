export type InfinityLoadingContainerProps = {
  children: React.ReactNode
  fetchNextPage: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
}
