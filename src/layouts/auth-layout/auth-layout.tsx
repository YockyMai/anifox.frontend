import { Outlet } from 'react-router-dom'

import './auth-layout.scss'

export const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <Outlet />
    </div>
  )
}
