import React, { useRef } from 'react'
import { auth } from '../firebase';
import "./signUp.css";

function SignUp() {
        const emailRef = useRef(null);
        const passwordRef1 = useRef(null);
        const passwordRef2 = useRef(null);

    const register = (e) =>{
        e.preventDefault();
        var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        if (expressionReguliere.test(emailRef.current.value)){
            auth.createUserWithEmailAndPassword(
                emailRef.current.value,
                passwordRef1.current.value
            )
            .then((authUser)=>{
                console.log(authUser)
                alert("you success for creating user")
            })
            .catch((error)=>{
                // {code: 'auth/weak-password', message: 'Password should be at least 6 characters', a: null}
                console.log(error.message);
                alert("error")
            })
        }else{
            alert("gmail not valid")
        }
       
    }
    return (
        <div class='container2'>
        <div className="loginForm2">
           <div className="logo1">
               <img src="https://logos-marques.com/wp-content/uploads/2021/03/logo-Amazon.jpg" alt="" />
           </div>
           <div className="signUp1">
               <div className='createItem'>Create account</div>
               <h5>Your name</h5>
               <input type="text" name=""  />
               <h5>Email</h5>
               <input ref={emailRef} type="email" name=""  />
                <div className="password">
                    <h5>Password</h5>
                    <input ref={passwordRef1} type="password" name=""  placeholder="At least 6 characters"/>
                    <p><span>i</span> Passwords must be at least 6 characters</p>
                </div>
               <h5>Re-enter password</h5>
               <input ref={passwordRef2} type="password" name=""  />
               <button className="buttonContinue2" onClick={register}>Create your Amazon account</button>
               <p className='agree'>By continuing, you agree to Amazon's <span>Conditions of Use </span> and <span>Privacy Notice.</span></p>
                           <p> Already have an account? <span>Sign-In</span> </p>
                           <p>Buying for work? <span>Create a free business account</span>  </p>  
                
           </div>

           <div className="bottom2">
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

export default SignUp
