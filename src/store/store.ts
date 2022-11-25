import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    
    constructor () {
        makeAutoObservable(this);
    }

    setAuth (bool: boolean) {
        this.isAuth = bool;

    }

    setUser (user: IUser) {
        this.user = user;
    }
    
    async login (User_nick: string, User_pass: string){
        try {
            const response = await AuthService.login(User_nick, User_pass);   
            console.log(response)      
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }
        catch (e) {
            console.log(e)
        }
    }


    async registration (User_nick: string, User_pass: string, User_name: string, User_surname: string){
        try {
            const response = await AuthService.registrarion(User_nick, User_pass, User_name, User_surname);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }
        catch (e) {
            console.log(e)
        }
    }


    async logout (){
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        }
        catch (e) {
            console.log(e)
        }
    }

    async checkAuth () {
        await axios.get<AuthResponse>(`http://localhost:5000/auth/refresh`, {withCredentials: true})
            .then((response) => {
                localStorage.setItem('token', response.data.accessToken);
                this.setAuth(true);
                this.setUser(response.data.user);
            });
        try {
            
            //const response = 
            
            
            
        }
        catch (e: any){
            console.log(e.response?.data?.message)
        }
    }
}