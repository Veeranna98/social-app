import React, { useContext } from 'react'
import Home from './Home'
import './Register.css'
import { UserContext } from './App'

export default function Register() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>
    <div className='Register-model'>
    <div className='Register-model-content'>
    <div className="Rigister-header">
          <div className="Register-signup-title">Register</div>
          <div onClick={() => setFlag(() => 0)} className="close">
            &times;
          </div>
        </div>
    <input type='text'></input><br></br>
    <input type='text'></input><br></br>
    <input type='text'></input><br></br>
    <button onClick={() => setFlag((prevState) => 2)}>Submit</button>
    </div>
    </div>
    </>
  )
}
