import APPOINTMENT_STATUS from "../constants/appointmentStats.enums";

interface IAppointments{
    appointment_id: number;
    patient_id: number;
    staff_id: number;
    appointment_date: number;
    status: APPOINTMENT_STATUS;
    notes: string;
}