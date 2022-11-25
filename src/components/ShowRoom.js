
import { observer } from "mobx-react-lite";
import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "..";
import RegistrationModal from "./Modals/RegistrationModal";
import './LoginForm.css';
import UserService from "../services/UserServise";
import RoomService from "../services/RoomService";
import { IUser } from "../models/IUser";
import io from 'socket.io-client';
import { render } from "react-dom";
import { AxiosResponse } from "axios";
import { IRoom } from "../models/IRoom";
import MainPage from "./MainPage";
import { StringDecoder } from "string_decoder";
import ShowUsers from "./ShowUsers";



export function ShowRoom(room_id) {
    const [isLoading, setValueLoading] = useState(true);
    const userService = new UserService;
    const roomService = new RoomService;

    const {store} = useContext(Context);

    const [dataPosts, setData] = useState(null);

    const [users, setUsers] = useState();

    
 
    
    /* useEffect(() => {

      const getAllUsers = async () => {
        try {
            if (localStorage.getItem('token')) {
                store.checkAuth();
                await roomService.getUsersInRoom()
                    .then((result) => {
                        setData(result.data)
                        return [result.status, result.data]

                    });
            }
        } catch (error) {
          console.error(error);
        } 
        };
        const posts = getAllUsers();
        const statusCode = posts[0];
        const data = posts[1]
        if (statusCode == 200) {
            setData(data)
        }

  
    },[])
  
    useEffect(() => {
      setValueLoading(false);
    }, [dataPosts]) */


    const getUsers = function (usersArr) {
        
        console.log(roomService.getUsersInRoom(users.room_id))
    }

    return (room_id.data == null ? <p>Пользователи: </p> : <>
    <p>Пользователи: </p> :
    {console.log(room_id.data)}
    {/* {users.data.map((user) =><div key={user._id}><p key={user._id}>Пользователь {user.User_name}</p></div>)} */}
    <button onClick={() => { store.logout(); } }>Выйти</button></>)


  }