import clsx from 'clsx'
import { motion } from 'framer-motion'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'

import './progress-bar.css'
import { ProgressBarProps } from './progress-bar.interface'

export const ProgressBar = ({
  color = UIColors.ORANGE,
  size = UISizes.XXL,
  radius = UISizes.SM,
  progress,
  ...other
}: ProgressBarProps) => {
  return (
    <div
      {...other}
      className={clsx(
        'progress-bar',
        `progress-bar_${color}`,
        `progress-bar_radius-${radius}`,
        `progress-bar_${size}`
      )}
    >
      <motion.div
        className='progress-bar__slider'
        animate={{ width: progress }}
      />
    </div>
  )
}
