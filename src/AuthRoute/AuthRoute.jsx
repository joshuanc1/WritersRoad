import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';

import React from 'react'

const AuthRoute = ({children}) => {
 
    const {loading, isAuthenticated} = useSelector(state => state.user)

  return (
    <>
        {loading === false && (
            isAuthenticated === false ? <Navigate to="/user/login" /> : children
        )}
    </>
  )
}

export default AuthRoute