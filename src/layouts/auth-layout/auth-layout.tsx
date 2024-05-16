import { Outlet } from 'react-router-dom'

import './auth-layout.css'

export const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <Outlet />
    </div>
  )
}
