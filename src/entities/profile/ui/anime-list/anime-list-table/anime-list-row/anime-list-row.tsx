import { Loader, Modal, UISizes } from '@anifox/ui'
import { useState } from 'react'

import { AnimeStatusCard } from '@/entities/anime/anime-card/ui'
import { AnimeListButton } from '@/entities/anime/anime-list'
import {
  useAnimeStatusMutation,
  useDeleteTrackedAnimeMutation
} from '@/services/mutations'

import { DraggableAnimeCardProps } from './anime-list-row.interface'

export const AnimeListRow = ({ anime, status }: DraggableAnimeCardProps) => {
  const deleteTrackedAnimeMutation = useDeleteTrackedAnimeMutation()
  const statusMutation = useAnimeStatusMutation()

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <div className='transition-colors hover:bg-slate-100 dark:hover:bg-slate-700'>
      <AnimeStatusCard
        onDeleteButtonClick={deleteTrackedAnimeMutation.mutate}
        onEditButtonClick={() => setIsEditModalOpen(true)}
        anime={anime}
        status={status}
      />

      <Modal
        title='Настройки'
        description='Выберите один из возможных вариантов и аниме перейдет в этот статус'
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
      >
        <div className='flex items-center justify-between pb-3'>
          <p>Доступные статусы</p>
          {statusMutation.isPending && (
            <div>
              <Loader size={UISizes.SM} />
            </div>
          )}
        </div>
        <AnimeListButton
          currentTrackedStatus={status}
          onlyContent
          animeUrl={anime.url}
        />
      </Modal>
    </div>
  )
}
