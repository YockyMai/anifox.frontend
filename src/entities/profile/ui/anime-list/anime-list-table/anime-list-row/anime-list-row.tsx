import { AnimeStatusCard } from '@/entities/anime/anime-card/ui'
import { useRemoveAnimeListEntryMutation } from '@/graphql/generated/output'

import { DraggableAnimeCardProps } from './anime-list-row.interface'

export const AnimeListRow = ({ animeListEntry }: DraggableAnimeCardProps) => {
  const [removeAnimeListEntry] = useRemoveAnimeListEntryMutation({
    update: (cache, { data }) => {
      if (data) {
        cache.evict({ id: cache.identify(data.removeAnimeListEntry) })
        cache.gc()
      }
    }
  })

  return (
    <div className='transition-colors hover:bg-slate-100 dark:hover:bg-slate-700'>
      <AnimeStatusCard
        onDeleteButtonClick={(animeUrl) =>
          removeAnimeListEntry({ variables: { animeUrl } })
        }
        animeListEntry={animeListEntry}
      />
    </div>
  )
}
