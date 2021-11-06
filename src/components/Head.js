import React, { useState, useEffect } from 'react'
import './head.css'
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { CgProfile }  from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { selectGmail } from '../features/userSlice'
import { Link } from "react-router-dom";
import {logout } from '../features/userSlice'
import { auth } from '../firebase';

function Head() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const gmail = useSelector(selectGmail)
    const dispatch = useDispatch()
    useEffect(()=>
    {
        if(burgerStatus){ 
            document.getElementById('burgerNav-item').style.transform = 'translateX(0)'
            document.getElementById('iconClose').style.transform = 'translateX(0)'
        }else{
            document.getElementById('burgerNav-item').style.transform = 'translateX(-100%)'
            document.getElementById('iconClose').style.transform = 'translateX(-100%)'

             }
    }
    ,[burgerStatus])
    const closeOpen = (e) =>{
        setBurgerStatus(!burgerStatus);
        
    }
    const signOut = () =>{
        dispatch(logout())
        auth.signOut()
        
    }
    return (
        <div className='head'>
              <div className="menu">
                    <BiMenu onClick={(e) =>closeOpen(e)}  className="iconMenu"/> 
                    {/* open/close */}
                    <div className="burgerNav-item" id='burgerNav-item' >
                        <div className="burgerNav-item1">
                            <AiOutlineClose onClick={(e) =>closeOpen(e)} id='iconClose'/>
                        </div>
                         <div className="burgerNav-item3">
                             <div className="profil">
                                <CgProfile/>
                                <p>Hello, abderrahim</p>
                             </div>
                             
                            <div className="digital">
                                <h2>Digital Content & Devices</h2> 
                                <a href="li">Digital Content & Devices</a>
                                <a href="li">Digital Content & Devices</a>  
                                <a href="li">Digital Content & Devices</a> 
                                 <hr />
                            </div>
                            <div className="digital">
                                <h2>Shop By Department</h2> 
                                <a href="li">Electronics</a>
                                <a href="li">computers</a>  
                                <a href="li">Smart Home</a> 
                                <a href="li">Arts & Crafts</a> 
                                <a href="li">See All</a> 
                                <hr />
                                <h2>Shop By Department</h2> 
                                
                              {gmail && (
                                <Link to='/signIn' onClick={signOut} >sign Out</Link> 
                              )}
                              {!gmail && (
                                   <Link to='/signIn'  >sign in</Link> 
                              )}
                                 <hr />
                            </div>
                         </div>

                        
                       
                       
                    </div>
                    
                    <p>All</p>
              </div>
               <div className="sousHead">
                    <div className="space1 service-item">Today's Deals </div>
                    <div className="space1">Browsing History</div>
                    <div className="space1">Buy Again</div>
                    <div className="space1">Gift Cards</div>
                    <div className="space1 name-item">abde... Amazon.com</div>
                    <div className="space1">Custom Service</div>
                    <div className="space1">Registry</div>
                    <div className="space1">Sell</div>
               </div>
            
                     
        </div>
    )
}

export default Head
