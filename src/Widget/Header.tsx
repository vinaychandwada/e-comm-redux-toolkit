import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='header-container'>
            <div><Link to='/'>Home</Link></div>
            <div>Contact us</div>
            <div> <Link to="/admin-login">Admin</Link> </div>
            <div>Login</div>
        </div>
    </>
  )
}

export default Header