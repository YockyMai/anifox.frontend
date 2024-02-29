import { useState } from 'react'

import { SidebarCollapsed } from './components/sidebar-collapsed'

export const Sidebar = () => {
  const [isCollapsed] = useState(true)

  return <div>{isCollapsed ? <SidebarCollapsed /> : <></>}</div>
}
