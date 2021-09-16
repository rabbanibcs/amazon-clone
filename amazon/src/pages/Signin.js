import React,{useState,useRef} from 'react'
import '../css/Signin.css'
import logo from '../images/amazon-logo.jpg'
import { Link} from "react-router-dom";
import validator from 'validator'
import axios from 'axios';
import {useContextValue} from '../ContextProvider'
import { useHistory } from "react-router-dom";

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailError=useRef()
    const displayEmail=useRef()
    const emailDiv=useRef()
    const passwordError=useRef()
    const passwordDiv=useRef()
    const buttonContinue=useRef()
    const displayTerms=useRef()
    const emailErr=useRef()
    const {currentUser,setCurrentUser}=useContextValue()
    let history = useHistory();

    const validateEmail = () => {
        if (validator.isEmail(email)) {
          return true
        } else {
          emailErr.current.style.display='block'
          return false
        }
      }
    const onClickContinue=()=>{
        if(!email){
            emailError.current.style.display='block'
        }else{
            if(validateEmail()){
                emailDiv.current.style.display='none'
                passwordDiv.current.style.display='block'
                displayEmail.current.style.display='block'
                displayTerms.current.style.display='none'
            }
        }
    }
    const onClickSignIn=()=>{
        if(!password){
            passwordError.current.style.display='block'
        }else{
            const user={email,password}
            axios.post(`http://127.0.0.1:8000/api/login/`,user)
            .then(res=>{
                sessionStorage.setItem('token',res.data.token);
                sessionStorage.setItem('user',JSON.stringify(res.data.user));
                setCurrentUser(res.data.user)
                history.push("/");
                // emailErr.current.style.display='none';
                // passwordErr.current.style.display='none';
                console.log(JSON.stringify(currentUser));})
            .catch((err)=>console.log(err));
            
            console.log('user loged In')
        }
    }
    return (
        <div className='signin'>
            <div className="signin__logo">
            <img src={logo} alt="" />
            </div>
            <div className="signin__inner">
                <h1 >Sign-In</h1>
                <p ref={displayEmail} style={{display:'none'}}>{email} <a href="#">change</a> </p>
                <div ref={emailDiv} style={{display:'block'}} className="email">
                    <h6>Email</h6>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" />
                    <p ref={emailError} style={{display:'none'}} className='email__error'>Enter Email</p>
                    <p ref={emailErr} style={{display:'none'}} className='email__error'>Enter valid email</p>
                    <input ref={buttonContinue} onClick={onClickContinue} type="button" value='Continue'/>

                </div>
                <div ref={passwordDiv} style={{display:'none'}} className="password">
                    <h6>Password <a id='Forgot-your-Password' href='#'>Forgot your Password?</a></h6>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" />
                    <p ref={passwordError} style={{display:'none'}} className='email__error'>Enter Password</p>
                    <input ref={buttonContinue} onClick={onClickSignIn} type="button" value='Sign In'/>

                </div>
                
                <p ref={displayTerms} style={{display:'block'}}>By continuing, you agree to Amazon's<a href="#"> Conditions of Use </a> and <a href="#"> Privacy Notice.</a> </p>
                <p><a href="#">Need help?</a></p>
            </div>
            <div className="register_link">
                <hr></hr>
                <p>New to Amazon?</p>
                <Link className='creat_account' to='/register/'> <input type="button"value='Create your Amazon account' /></Link>
            </div>
        </div>
    )
}
