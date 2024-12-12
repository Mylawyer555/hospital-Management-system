import { ROLE } from "../constants/role.enums";
import SPECIALIZATION from "../constants/specialization.enums";
import IStaffs from "../interfaces/staffs.interface";

 interface StaffServices{
    addStaff(data: IStaffs): Promise<IStaffs>
    getStaffById(id: number): Promise<IStaffs | undefined>
    getAllStaff(): Promise<IStaffs[]>
    updateStaff(id: number, data: IStaffs): Promise<IStaffs>
    deleteStaff(id: number): Promise<void>
    getStaffByRole(role: ROLE): Promise<IStaffs[]>
    getStaffBySpecilazation(spec:SPECIALIZATION):Promise<IStaffs[]>
    

}

export default StaffServices;
