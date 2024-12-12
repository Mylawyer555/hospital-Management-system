import ROOM_STATUS from "../constants/roomStatus.enums";
import ROOM_TYPE from "../constants/roomType.enum";

interface IRooms{
    room_number: number;
    type: ROOM_TYPE; 
    status: ROOM_STATUS;
    created_at: string;
}



export default IRooms