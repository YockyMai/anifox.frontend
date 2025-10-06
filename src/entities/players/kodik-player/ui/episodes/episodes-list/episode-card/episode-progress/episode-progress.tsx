import React from 'react'

import { EpisodeProgressProps } from './episode-progress.interface'

export const EpisodeProgress = ({
  progress,
  episodeDuration
}: EpisodeProgressProps) => {
  const percent = Math.floor((progress.timing / (episodeDuration * 60)) * 100)

  return (
    <div className='relative mt-0.5 h-[2px] w-full overflow-hidden rounded bg-slate-500 dark:bg-slate-300'>
      <div
        style={{ width: `${percent}%` }}
        className={`absolute left-0 z-10 h-full bg-orange-400 dark:bg-orange-300`}
      />
    </div>
  )
}
