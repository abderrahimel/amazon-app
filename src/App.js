import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectGmail } from './features/userSlice';
import { auth } from './firebase';
import Home from './components/Home'
function App() {
  const user = useSelector(selectGmail)
  const dispatch = useDispatch();

 

  return (
    <div className="app">
         <Home />
    </div>
  );
}

export default App;
