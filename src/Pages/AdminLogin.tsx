import React from 'react'
import {useNavigate} from 'react-router-dom'

const AdminLogin = () => {

    const navigate = useNavigate();
    const loginAdmin = () =>{
        navigate('/admin-home');
    }

  return (
    <div className='admin-login-card'>
            
            <div className='admin-login-field-card'>
                <div>Email:</div>
                <input type="text" name="email" id="email" className='email' />
            </div>
            <div className='admin-login-field-card'>
                <div>Password:</div>
                <input type="password" name="password" id="password" className='password' />
            </div>
            <div>
                <button type="button" className='admin-login-button' onClick={()=>{ loginAdmin() }}> Login </button>
            </div>

        </div>
  )
}

export default AdminLogin