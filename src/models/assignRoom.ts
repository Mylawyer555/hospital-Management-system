import Appointments from "./doctorAppointment";

class assignRoom extends Appointments{
    room_number: number;

    constructor(staff_id: number, patient_id: number, appointment_date: string, room_number: number){
        super();
        this.room_number = room_number;
    }

    public getRoomNumber(): number{
        return this.room_number;
    }
// polymorphism application
    getAppointment(): string {
        
        return `Appointment ID: ${super.getAppointment()}, room number ${this.room_number}`;
    }
}


export default assignRoom;