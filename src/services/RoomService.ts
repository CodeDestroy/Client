import $api from "../http";
import {AxiosResponse} from 'axios'
import { RoomResponse } from "../models/response/RoomResponse";
import { IUser } from "../models/IUser";
import { IRoom } from "../models/IRoom";
import { AuthResponse } from "../models/response/AuthResponse";
import { UserResponse } from "../models/response/UserResponse";
import { IUsers } from "../models/IUsers";

export default class RoomService {


    static async createRoom (Users: string[], roomName: string): Promise<AxiosResponse<RoomResponse>> {
        return $api.post<RoomResponse>('/room/create', {Users, roomName});
    }

    async getRooms(User_id: string): Promise<AxiosResponse<IRoom[]>> {
        console.log(User_id)
        return $api.post<IRoom[]>('/room/getRooms', {User_id})
    }

    /* getUsersInRoom(Room_id: string): Promise<AxiosResponse<UserResponse>> {
        return $api.get<UserResponse>('/room/getUsersInRoom', {Room_id})
    } */

    async getUsersInRoom (Room_id: string): Promise<AxiosResponse<IUser[]>> {
        return $api.post<IUser[]>('/room/getUsersInRoom', {Room_id});
    }

    /* export default class UserService {
        fetchUsers(): Promise<AxiosResponse<IUser[]>> {
            return $api.get<IUser[]>('/users')
        }
    } */
    


    /* static async login (User_nick: string, User_pass: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {User_nick, User_pass});
    }

    static async registrarion (User_nick: string, User_pass: string, User_name: string, User_surname: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {User_nick, User_pass, User_name, User_surname});
    }

    static async logout (): Promise<void> {
        return $api.post('/logout');
    } */
}
