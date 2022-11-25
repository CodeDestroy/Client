import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { Context } from '../..';
import RoomService from '../../services/RoomService';
import './RegistrationModal.css';
import './CreateRoom.css'

const CreateRoom = ({active, setActive, allowedUsers}) => {
    const [roomName, setRoomName] = useState('Комната');
    const [checked, setChecked] = useState([]);
    const {store} = useContext(Context);
    const handleCheck = (event) => {
        
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    const isChecked = (item) => 
        checked.includes(item) ? "checked-item" : "not-checked-item";
        
       
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() =>  setActive(false)}>
            <div className='modal_content' onClick={(e) => e.stopPropagation()}>
                <input
                    onChange={e => setRoomName(e.target.value)}
                    value={roomName} 
                    type="text" 
                    placeholder="Название комнаты" 
                />
                <div className="checkList">
                    <div className="title">Your CheckList:</div>
                    <div className="list-container">
                    
                    {/* { allowedUsers.data.map((item, index) => ( 
                        (item._id == store.user.id) ? allowedUsers.data.splice(index, 1) : console.log(item)
                    )) } */}
                    {allowedUsers.data.map((item, index) => (
                        (item._id == store.user.id) ? 
                            console.log(item._id == store.user.id)
                            :
                            <div key={item._id}>
                                <input value={item._id} type="checkbox" onChange={handleCheck}/>
                                
                                <span className={isChecked(item._id)}>{item.User_nick}</span>
                            </div>
//                            console.log(store.user)
                        
                        
                    ))}
                        {/**/}
                    
                    </div>
                </div>
        
                <button onClick={() => {
                    
                    (!checked.includes(store.user.id)) ? checked.push(store.user.id) : console.log(checked)
                    RoomService.createRoom(checked, roomName)
                    store.checkAuth();
                    setActive(false)
                    //window.location.reload(false);
                } }>Создать</button>
                
                <button onClick={() => {
                    setActive(false)
                } }>Выйти</button>
            </div>
        </div>
    )
}
 
export default CreateRoom;