import React,{ useRef, useEffect } from 'react'
import './loginSecond.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectGmail } from '../features/userSlice'
import { auth } from '../firebase'
import { useHistory } from "react-router-dom";
import { setStatus, selectUserStatus } from '../features/userSlice'

function LoginSecond() {
    const gmailInData = useSelector(selectGmail);
    const status = useSelector(selectUserStatus);
    const dispatch = useDispatch();
    const password = useRef(null)
    const history = useHistory();
    console.log('status', status);

    const signIn = (e) =>{
        e.preventDefault()
        console.log(password.current.value);
        auth.signInWithEmailAndPassword(
            gmailInData,
            password.current.value
        )
        .then((authUser) =>{
            console.log(authUser);
            dispatch(setStatus(true))
            console.log('status', status);
            history.push('/')
           
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <div class='container1'>
        <div className="loginForm">
                <Link  to="/signIn" className="logo1">
                       <img src="https://logos-marques.com/wp-content/uploads/2021/03/logo-Amazon.jpg" alt="" />
                </Link>
           <div className="signIn2">
               <h2>Sign-In</h2>
               <div className="changeuser">
                    <p>{gmailInData}</p> 
                    <span>
                        <Link to="/signIn" className="backTosignIn">
                          change
                        </Link>
                      </span>
               </div>

                 <div className="forgot">
                 <h5>Password</h5>
                 <span>Forgot your password?</span>
                </div>
               <input ref={password} type="password" name="" style={{paddingLeft: '10px'}} />
               <button onClick={signIn} className="buttonContinue">Sign-In</button>
               <div className='agree'>
                  <input type="checkbox" />
                  <p> Keep me signed <span>Details</span>   </p> 

               </div>
                
                
           </div>

           <div className="bottom">
               <div className="text">
                   <div className="condition">
                       <span> Conditions of Use  </span>
                       <span>Privacy Notice </span>
                       <span> Help </span>
                   </div>
                   <div className="annee2">
                       <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                   </div>
               </div>
           </div>
        </div>
       
     
    </div>
    )
}

export default LoginSecond
