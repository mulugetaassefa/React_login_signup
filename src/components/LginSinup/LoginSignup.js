import React from 'react';
import { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const  LoginSignup =()  => {
    const [action, setAction]=useState('sign up');
  return (
    <div className='container'>
       <div className='header' >
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>  
          <div className='inputs'>
            {action==='Login'? <div></div> :

          <div className='input'>
            <img src={user_icon}    alt='person icon' />
            <input type='text'   placeholder='name'/>
          </div> }

          <div className='input'>
          
            <img src={email_icon} alt='email icon' />
            <input type='email' placeholder='Email Id'/>
          </div>

        
          <div className='input'>
            <img src={password_icon} alt='password icon' />
            <input type='password' placeholder='password'/>
          </div>
          
          </div>
          {action==='Sign up'? <div></div> :
          <div className='forgot-password' >LostPasword? <span>Click here</span></div> }
      
          <div className='container'>
               <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Sign up')} }>Sign up</div>
               <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Login </div> 
            </div>  
    </div>
  );
};


export default LoginSignup;