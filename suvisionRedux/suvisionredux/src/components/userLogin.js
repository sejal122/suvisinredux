import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {authenticate} from '../store/loginSlice'
function UserLogin() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
    e.preventDefault();
        dispatch(authenticate([username,password]))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' id='username' onChange={(e)=>setUsername(e.target.value)} placeholder='username'></input>
                <label>Password</label>
                <input type='password' id='Password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default UserLogin
