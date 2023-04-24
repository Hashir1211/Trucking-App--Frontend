import React, { useState } from "react"
import { IoLogIn, IoSettingsOutline } from "react-icons/io5"
import { BiLogOut, BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../redux/slice/userSlice"
import { useHistory } from "react-router-dom";
import { TiTicket } from "react-icons/ti";
import { FaBlogger } from "react-icons/fa";

export function User(){

  const history = useHistory()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(false)
  }

  const handleLogOut=(e)=>{
   dispatch(setUser(null))
   localStorage.removeItem('data');
   history.push('/')
  }
 
  if (user?.currentUser?.role==='Admin'){
  return (
    <>
      <div className='profile'>
        {user?.currentUser ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
            <BiUserCircle className='icon'/>
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <h4>User: </h4>
                    </div>
                    <div className='text'>
                      <h4> {user?.currentUser.name}</h4>
                    </div>
                  </div>
                </Link>
                <Link to='/manage/post'>
                  <button className='box'>
                    <FaBlogger className='icon' />
                    <h4>Manage Blog Posts</h4>
                  </button>
                </Link>
                <Link to='/manage/ticket'>
                  <button className='box'>
                    <TiTicket className='icon' />
                    <h4>Manage Tickets</h4>
                  </button>
                </Link>
                <Link to='/register'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>Register User</h4>
                  </button>
                </Link>
                <Link to='/manage/qoute'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>View Qoutes</h4>
                  </button>
                </Link>
                <button className='box' onClick={handleLogOut} >
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to='/login'><button className='box'> <IoLogIn className='icon' /><h4>Login</h4> </button></Link>
        )}
      </div>
    </>
  )}
  else{
    return (
      <>
        <div className='profile'>
          {user?.currentUser ? (
            <>
              <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <BiUserCircle  className='icon' />
              </button>
              {profileOpen && (
                <div className='openProfile boxItems' onClick={close}>
                  <Link to='/account'>
                    <div className='image'>
                      <div className='img'>
                        <h4>User: </h4>
                      </div>
                      <div className='text'>
                        <h4> {user?.currentUser.name}</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to='/manage/post'>
                    <button className='box'>
                      <FaBlogger className='icon' />
                      <h4>Manage Blog Posts</h4>
                    </button>
                  </Link>
                  <Link to='/manage/ticket'>
                    <button className='box'>
                      <TiTicket className='icon' />
                      <h4>Manage Tickets</h4>
                    </button>
                  </Link>
                  <button className='box' onClick={handleLogOut} >
                    <BiLogOut className='icon' />
                    <h4>Log Out</h4>
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to='/login'><button className='box'> <IoLogIn className='icon' />Login</button></Link>
          )}
        </div>
      </>
    )
  }
}
