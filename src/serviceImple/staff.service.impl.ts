import { ROLE } from "../constants/role.enums";
import SPECIALIZATION from "../constants/specialization.enums";
import IStaffs from "../interfaces/staffs.interface";
import StaffServices  from "../services/Hospital.services";

class StaffServiceImpl implements StaffServices{
    staffs: IStaffs[] = [];
    private nextId = 1;
    async addStaff(data: IStaffs): Promise<IStaffs> {
        const newStaff: IStaffs = { ...data, staff_id: this.nextId++ };
        this.staffs.push(newStaff);
        return newStaff;
    };
    async getStaffById(id: number): Promise<IStaffs> {
        const staff = this.staffs.find((s) => s. staff_id === id);
        if (!staff) {
            throw new Error(`staff with ID ${id} not found`)
        }
        return staff;
    }
  
    async getAllStaff(): Promise<IStaffs[]> {
        return this.staffs;
    }

    async updateStaff(id: number, data: IStaffs): Promise<IStaffs> {
        const index = this.staffs.findIndex((s) => s.staff_id === id);
        if (index === -1) {
            throw new Error(`staff with ID ${id} not found`)
        }
        this.staffs[index] = {...this.staffs[index],...data};
        return this.staffs[index];
        
       
    }
   
    async deleteStaff(id: number): Promise<void> {
        const index = this.staffs.findIndex((s) => s.staff_id === id);
        if (index === -1) {
            throw new Error(`staff with ID ${id} not found`)
        }
        this.staffs.splice(index, 1);
    
    }
    async getStaffByRole(role: ROLE): Promise<IStaffs[]> {
        
        return this.staffs.filter((s) => s.role === role);
    }
    async getStaffBySpecilazation(spec: SPECIALIZATION): Promise<IStaffs[]> {
        
        return this.staffs.filter((s) => s.specialization === spec);
    }
    
}