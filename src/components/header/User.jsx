import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from "../../hooks/useLocalStorage"

export const User = () => {
  const user = useSelector((state) => state.user);
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }

 
  
  return (
    <>
      <div className='profile'>
        {user?.currentUser ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    </div>
                    <div className='text'>
                      <h4>{user.name}</h4>
                    </div>
                  </div>
                </Link>
                <Link to='/manage/post'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>Manage Blog Posts</h4>
                  </button>
                </Link>
                <Link to='/manage/tickets'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>Manage Tickets</h4>
                  </button>
                </Link>
                <button className='box' >
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button >Login</button>
        )}
      </div>
    </>
  )
}
