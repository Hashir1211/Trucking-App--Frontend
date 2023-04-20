import React from 'react'
import { useSelector } from 'react-redux';
import { NotFound } from '../../pages/404/NotFound';
export const Auth = ({ childComponent: Child }) => {
    const user= useSelector((state) => state.user);

  return (
    <>
  {user.currentUser ?
    <Child/> : <NotFound/>}
  </>
  )
}


