import React, { useRef, useEffect } from 'react';
import './loginFirst.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setGamil, selectGmail } from '../features/userSlice'
import { useHistory } from "react-router-dom";

function LoginFirst() {
    let gmailInData = useSelector(selectGmail);
    const dispatch = useDispatch();
    const gmail = useRef(null);
    const history = useHistory();
useEffect(()=>{
  
}, [gmailInData])
    const storeGmail = (e) =>{
        e.preventDefault()
        var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        if (expressionReguliere.test(gmail.current.value)){
            dispatch(setGamil(gmail.current.value))
            history.push('/signInNext')
        }else{
            alert("email non valid")
        }
       
    }
    return (
        <div class='container1'>
            <div className="loginForm">
              
               <Link  to="/" className="logo1">
                       <img src="https://logos-marques.com/wp-content/uploads/2021/03/logo-Amazon.jpg" alt="" />
                </Link>
               
               <div className="signIn">
                   <h2>Sign-In</h2>
                   <p>Email or mobile phone number</p>
                   <input ref={gmail} type="email" name="" id="" />
                   <button onClick={storeGmail} className="buttonContinue">Continue</button>
                  <div className='agree'>
                      <p>  By continuing, you agree to Amazon's <span>Conditions of Use</span>  and  Privacy Notice.</p>
                </div>
                    
                      <span>Need help?</span>
                    
               </div>
               <div className="signUp">
                      <p>New to Amazon ?</p> 
                       <div className="signUpButton">
                                <Link to="/signUp" className="createAmazon">
                                  Create your Amazon Account


                                </Link>
                       </div>
               </div>
               <div className="bottom">
                   <div className="text">
                       <div className="condition">
                           <span> Conditions of Use  </span>
                           <span>Privacy Notice </span>
                           <span> Help </span>
                       </div>
                       <div className="annee">
                           <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                       </div>
                   </div>
               </div>
            </div>
           
         
        </div>
    )
}

export default LoginFirst
