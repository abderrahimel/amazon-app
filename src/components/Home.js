import React, { useEffect, useState } from 'react'
import Body from './Body'
import Head from './Head'
import Header from './Header'
import Account from './Account';
import { BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import LoginFirst from './LoginFirst';
import SignUp from './SignUp';
import LoginSecond from './LoginSecond';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { auth, db } from '../firebase';
import { selectGmail,setGamil, logout } from '../features/userSlice'
import ChangeLang from '../ChangeLang';
import Game from './Game';
import ProduitDetail from './ProduitDetail';

function Home() {
    const gmail = useSelector(selectGmail);
    const dispatch = useDispatch();
  useEffect(()=>{
    
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
          if(userAuth){
              // logged in
              dispatch(setGamil(userAuth.email))
              console.log("userAuth",userAuth.email);
          }else{
              // logged out
              dispatch(logout())
          }
      })
      return unsubscribe;
  }, [])
    return (
        <div >
            <Router>
                  

                    <Switch>

                            <Route exact path='/signIn'>
                            <LoginFirst/>
                            </Route>

                            <Route exact path='/signInNext'>
                            <LoginSecond/>
                            </Route>

                            <Route exact path="/">
                                <Header />
                                <Head/>
                                <Body/>
                            </Route>
                            <Route exact path='/cart'>
                                <Cart/>
                            </Route>
                            <Route exact path='/yourAccount' >
                                <Header />
                                <Head/>
                                <Account/>
                            </Route>

                            <Route exact path='/signUp' >
                            <SignUp/>
                            </Route>
                            <Route exact path='/changeLang'>
                                <Header/>
                                <Head/>
                                <ChangeLang/>
                            </Route>
                            <Route exact path='/games'>
                                <Header/>
                                <Head/>
                                <Game/>
                            </Route> 
                            <Route exact path='/produitDetail/:id'>
                                <Header/>
                                <Head/>
                                <ProduitDetail/>
                            </Route>
                    </Switch>
          
        
            </Router>

        </div>
    )
}

export default Home
