
import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "..";
import './LoginForm.css';
import UserService from "../services/UserServise";
import RoomService from "../services/RoomService";

import MainPage from "./MainPage";
import CreateRoom from "./Modals/CreateRoom";

export function HomePage(_props) {
    const [isLoading, setValueLoading] = useState(true);
    const userService = new UserService;
    const roomService = new RoomService;
    const [modalActive, setModalActive] = useState(false);
    const {store} = useContext(Context);
    const [users, setUsers] = useState();
    const [dataPosts, setData] = useState(null);


 
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
      const getPosts = async () => { 
        try {
            console.log(store.user)
            const data = await roomService.getRooms(store.user.id)
          /*       .then((result) => {
                    setData(result.data)
                    return [result.status, result.data]
            }); */
            setData(data.data);
            return [data.status, data.data]
            
        } catch (error) {
          console.error(error);
        } 
        };
        const posts = getPosts();
        const statusCode = posts[0];
        const data = posts[1]
        if (statusCode == 200) {
            setData(data)
            
        }
        
  
    },[])
  
    useEffect(() => {
      setValueLoading(false);
    }, [dataPosts])
    const createRoomFunc = async () => {
        try {
            setUsers(await userService.fetchUsers())
            setModalActive(true)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        isLoading ? <p>Ожидайте</p> : 
        <>

            <div key={store.user.id}>
                Текущий пользователь: {store.user.User_name}
            </div>
            <MainPage data={dataPosts} /> 
            <button onClick={() => { store.logout(); } }>Выйти</button>
            <button onClick={() => createRoomFunc()}>Создать комнату</button>
             
            {users ? <CreateRoom  active={modalActive} setActive={setModalActive} allowedUsers={users}  /> : <p>Ожидайте</p>}
           
            
            
        </>
        )


  }