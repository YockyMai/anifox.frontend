import { AnimesQuery } from '../generated/output'

export const pageBasedPaginationPolicy = {
  merge(
    existing: AnimesQuery['animes'] = {
      data: [],
      pageInfo: { hasNextPage: false, page: 0 }
    },
    incoming: AnimesQuery['animes']
  ) {
    return {
      data: [...(existing?.data || []), ...incoming.data],
      pageInfo: incoming.pageInfo
    }
  }
}
