import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation,Navigate } from 'react-router-dom'

const RequireAdminAuth = ({children}) => {
    const location = useLocation()
    const adminAuth = useSelector((store) => store.auth.adminAuth)
    if(!adminAuth){
        return <Navigate to="/login" state={{from:location}}></Navigate>
    }
  return children
}

export default RequireAdminAuth