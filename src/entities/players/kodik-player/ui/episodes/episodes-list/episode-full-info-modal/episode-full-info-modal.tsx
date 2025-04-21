import { Modal, Image } from '@anifox/ui'
import React from 'react'

import { EpisodeFullInfoModalProps } from './episode-full-info-modal.interface'

export const EpisodeFullInfoModal = ({
  open,
  onClose,
  episode
}: EpisodeFullInfoModalProps) => {
  return (
    <Modal withoutPadding open={open} onOpenChange={onClose}>
      <Image
        src={episode.image}
        className='h-[100px] w-full rounded-b-none rounded-t-xl'
      />

      <div className='flex flex-col gap-y-4 p-3'>
        <p className='text-xl font-bold dark:text-white'>{episode.title}</p>

        <p className='text-sm dark:text-slate-500'>{episode.description}</p>

        <span className='h-[1px] w-full bg-slate-300 dark:bg-slate-400' />

        <div>
          {episode.duration && (
            <div className='flex items-baseline justify-between gap-x-1'>
              <p className='text-nowrap text-sm'>Длительность эпизода</p>

              <div className='h-1 w-full border-b-[1px] border-dashed border-slate-500' />

              <p className='text-nowrap text-sm'>{episode.duration} мин</p>
            </div>
          )}

          {episode.progress && (
            <div className='flex items-baseline justify-between gap-x-1'>
              <p className='text-sm'>Просмотренно</p>

              <div className='h-1 w-full border-b-[1px] border-dashed border-slate-500' />

              <p className='text-nowrap text-sm'>
                {Math.floor(episode.progress.timing / 60)} из {episode.duration}{' '}
                мин.{' '}
                {episode.duration && (
                  <>
                    (
                    {Math.floor(
                      (episode.progress.timing / (episode.duration * 60)) * 100
                    )}
                    %)
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}
