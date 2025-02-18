import { DragControls } from 'framer-motion'

import { AnimeTrackStatuses } from '@/services/api'

export type AnimeListTableHeaderProps = {
  status: AnimeTrackStatuses
  dragControls: DragControls
}
