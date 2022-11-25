
import React, { FC, useContext, useEffect, useState } from "react";
import { Context } from "..";
import './LoginForm.css';
import UserService from "../services/UserServise";
import RoomService from "../services/RoomService";

import socket from '../socket'




function MainPage(arr) {

    const [isLoading, setValueLoading] = useState(true);
    const userService = new UserService;
    const roomService = new RoomService;
    const [message, setMessage] = useState('');
    //const [isConnected, setIsConnected] = useState(socket.connected);
    const {store} = useContext(Context);

    const [users, setUsers] = useState(null);

    useEffect(() => {
        try {
            if (localStorage.getItem('token')) {
                store.checkAuth();
            }
        } catch (error) {
            console.error(error);
        } 
    },[])
    
    const getUsersByRoom = async function(id){
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
        await roomService.getUsersInRoom(id).then((result) => {
            setUsers(result);
        })
        
        
    };

    return (
        
        <div className="wrapper">
            
            {arr.data ? 
            <>{arr.data.map((room) =><div key={room._id}><button key={room._id} onClick={() => getUsersByRoom(room._id)}>Комната {room.roomName}</button></div>)} 
                {/* <div><ShowRoom data={roomId}/></div> */}
                {users ? users.data.map((user) =><div key={user._id}>Пользователь {user.User_name}</div>) : <p></p>}
            </>
            : <><p>Ожидайте</p></>}
            <div>
                <textarea></textarea>
            </div>
            <div>
                <input
                        onChange={e => setMessage(e.target.value)}
                        value={message} 
                        type="text" 
                        placeholder="Сообщение" 
                />
                <button onClick={() => socket.emit('message', message)} >Отправить сообщение</button>
            </div>
            
            
             
        </div>

     )
  }



export default MainPage;



