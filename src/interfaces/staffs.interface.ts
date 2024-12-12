import { ROLE } from "../constants/role.enums";
import SPECIALIZATION from "../constants/specialization.enums";

interface IStaffs{
    staff_id: number;
    first_name: string;
    last_name: string;
    role: ROLE;
    specialization: SPECIALIZATION;
    phone_number: number;
    email: string;
    address: string;
    hire_date: number;
    created_at: number;
    updated_at: number;
}

export default IStaffs