import $api from "../http";
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login (User_nick: string, User_pass: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {User_nick, User_pass});
    }

    static async registrarion (User_nick: string, User_pass: string, User_name: string, User_surname: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', {User_nick, User_pass, User_name, User_surname});
    }

    static async logout (): Promise<void> {
        return $api.post('/auth/logout');
    }
}
