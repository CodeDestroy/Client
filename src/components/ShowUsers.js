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

const socket = io('http://localhost:5000');


function ShowUsers(arr) {

    return (
        
        <div>
            
            {arr.data ? arr.data.map((user) =><div key={user._id}>Пользователь {user.User_name}</div>) : <p>Ожидайте</p>}

        </div>

     )
  }



export default ShowUsers;



