import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const[userData,setUserData]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })


const [error, setError]=useState('')
const navigate = useNavigate

const changeInputHandler=(e)=>{
setUserData(prevState =>{
    return {...prevState,[e.target.name]: e.target.value}
})
}

const registerUser = ()=>{

}


  return (
    <section className='register'>
      <div className='container'>
        <h2>SignUp</h2>
        Submit<form className='form register__form' onSubmit={registerUser}>
         {error && <p className='form__error-message'>{error}</p>} 
          <input type='text' placeholder='FullName' name='name' value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type='email' placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type='password' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} autoFocus/>
          <input type='password' placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler} autoFocus/>
        <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an account? <Link to="/login">Sign in</Link></small>
      </div>
    </section>
  )
}

export default Register