


class Appointments{
    patient_id!: number;
    staff_name!: string;
    date!: string;
    time!: string;

    getAppointment(): string{
        return `Hello dear!
        Your appointment with doctor ${this.staff_name} is scheduled by ${this.time} on ${this.date}
        `
    }

    cancelAppointment(): string{
        return `Your appointment with doctor ${this.staff_name} has been canceled on ${this.date} at ${this.time}`
    }
}
//object 

const appointment = new Appointments();
appointment.patient_id = 123;
appointment.staff_name = "Dr. Smith";
appointment.date = "2022-12-25";
appointment.time = "10:00 AM";

console.log(appointment.getAppointment()); //Hello dear! Your appointment with doctor Dr. Smith is scheduled by 10:00 AM on 2022-12-25

export default Appointments;