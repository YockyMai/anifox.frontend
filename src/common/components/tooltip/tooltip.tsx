import { HoverCard } from '../hover-card'
import './tooltip.css'
import { TooltipProps } from './tooltip.interface'

const Tooltip = ({ label, children }: TooltipProps) => {
  return (
    <HoverCard trigger={children} openDelay={300}>
      <p className='tooltip-label'>{label}</p>
    </HoverCard>
  )
}

export default Tooltip
