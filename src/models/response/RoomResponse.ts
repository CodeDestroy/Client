import { IRoom } from "../IRoom";

export interface RoomResponse {
    accessToken: string,
    refreshToken: string;
    room: IRoom;
}