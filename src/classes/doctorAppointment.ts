import IPatients from "../interfaces/patients.interface";

class Appointments{
    
    constructor(private staff_id: number, patient_id:Number) { }
    
    public getStaffId(): number {
        return this.staff_id;
    }


}

export default Appointments;