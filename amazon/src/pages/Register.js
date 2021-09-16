import React,{useState,useRef} from 'react'
import '../css/Register.css'
import logo from '../images/amazon-logo.jpg'
import validator from 'validator'
import axios from 'axios';
import {useContextValue} from '../ContextProvider'
import { useHistory } from "react-router-dom";

export default function Register() {
    let history = useHistory();

    const {currentUser,setCurrentUser}=useContextValue()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const passwordErr=useRef()
    const emailErr=useRef()

    const validateEmail = () => {
        if (validator.isEmail(email)) {
          return true
        } else {
          emailErr.current.style.display='block'
          return false
        }
      }
      const validatePassword=()=>{
          if(password===password2){
              return true
          }else{
              passwordErr.current.style.display='block'
              return false
          }
      }
      const createAccount=()=>{
          const user={name,email,password}
        if(validateEmail() && validatePassword()){
            
            axios.post(`http://127.0.0.1:8000/api/register/`,user)
            .then(res=>{
                sessionStorage.setItem('token',res.data.token);
                sessionStorage.setItem('user',JSON.stringify(res.data.user));
                setCurrentUser(res.data.user)
                emailErr.current.style.display='none';
                passwordErr.current.style.display='none';
                console.log(JSON.stringify(currentUser));
                history.push("/");
            })
            .catch((err)=>console.log(err));
            
            console.log('user registered')
        }

      }
    return (
        <div className='register'>
           <div className="register__logo">
            <img src={logo} alt="" />
            </div>
            <div className="register__inner">
                <h1 >Create account</h1>
                <h6>Your name</h6>
                <input onChange={(e)=>setName(e.target.value)} type="text" />
                <h6>Email</h6>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" />
                <p ref={emailErr} style={{display:'none'}} className='email__error'>Enter valid email</p>

                <h6>Password</h6>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='At least 6 characters'/>
                <h6>Re-enter pasword</h6>
                <input onChange={(e)=>setPassword2(e.target.value)} type="password" />
                <p ref={passwordErr} style={{display:'none'}} className='email__error'>Passwords did not match</p>
                
                <input onClick={createAccount} type="button"value='Create your Amazon account' />
                <p  >By continuing, you agree to Amazon's<a href="#"> Conditions of Use </a> and <a href="#"> Privacy Notice.</a> </p>

            </div>  
        </div>
    )
}
