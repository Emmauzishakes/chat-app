import React, { useState, useEffect } from 'react';
import Navlinks from './components/Navlinks'
import Chatbox from './components/Chatbox'
import ChatList from './components/Chatlist'
import Register from './components/Register'
import Login from './components/Login'
import { auth } from './firebase/firebase';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser){
      setUser(currentUser);
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      {user ? (
        <div className='flex lg:flex-row flex-col items-start w-[100%]'>
          <Navlinks />
          <ChatList />
          <Chatbox />
        </div>
      ):(
        <div>{isLogin ? <Login isLogin={isLogin} setIsLogin={setIsLogin} /> : <Register isLogin={isLogin} setIsLogin={setIsLogin} />}</div>
      )};
    </div>
  )
}

export default App
