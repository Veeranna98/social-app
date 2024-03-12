import React, { useContext } from 'react'
import { UserContext } from './App'
import Register from './Register';


export default function Login() {
    const {flag, setFlag}=useContext(UserContext);
  return (
    <>
    <div>Login</div>
    <input type='text'></input><br></br>
    <input type='text'></input><br></br>
    <button onClick={()=>setFlag((prev)=>2)}>Login</button>
    <button onClick={()=>setFlag((prev)=>1)}>Create Account</button>
    {flag===1 && (<Register />)}
    </> 
  )
}
