import { observer } from 'mobx-react-lite';
import React, {FC, useContext, useEffect, useState} from 'react';
import { Context } from './';

import './App.css';
import LoginForm from './components/LoginForm';
import socket from './socket'
import { HomePage } from './components/HomePage';



const App: FC = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const {store} = useContext(Context);

  useEffect ( () => {
    //store.logout();
    //store.checkAuth();
    if (localStorage.getItem('token')) {
      //store.logout();
        store.checkAuth();
    }
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    }
  }, [])


if (!store.isAuth) {
  return (
    <LoginForm/>
  )
}
else {
  return (
    <HomePage/>
  )
}

};

export default observer(App);
