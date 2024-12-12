import { ROLE } from "../constants/role.enums";
import SPECIALIZATION from "../constants/specialization.enums";
import IStaffs from "../interfaces/staffs.interface";
import StaffServices  from "../services/Hospital.services";

class StaffServiceImpl implements StaffServices{
    addStaff(data: IStaffs): Promise<IStaffs> {
        throw new Error("Method not implemented.");
    }
    getStaffById(id: number): Promise<IStaffs | undefined> {
        throw new Error("Method not implemented.");
    }
    getAllStaff(): Promise<IStaffs[]> {
        throw new Error("Method not implemented.");
    }
    updateStaff(id: number, data: IStaffs): Promise<IStaffs> {
        throw new Error("Method not implemented.");
    }
    deleteStaff(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getStaffByRole(role: ROLE): Promise<IStaffs[]> {
        throw new Error("Method not implemented.");
    }
    getStaffBySpecilazation(spec: SPECIALIZATION): Promise<IStaffs[]> {
        throw new Error("Method not implemented.");
    }
    
}