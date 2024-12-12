import { GENDER } from "../constants/gender.enums";

interface IPatients{
    patient_id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: GENDER;
    address: string;
    phone_number: string;
    email?: string;
    emergency_contact: string;
    created_at: string;
    updated_at: string;
}

export default IPatients;