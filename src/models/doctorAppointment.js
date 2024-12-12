"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Appointments = /** @class */ (function () {
    function Appointments() {
    }
    Appointments.prototype.getAppointment = function () {
        return "Hello dear!\n        Your appointment with doctor ".concat(this.staff_name, " is scheduled by ").concat(this.time, " on ").concat(this.date, "\n        ");
    };
    return Appointments;
}());
//object 
var appointment = new Appointments();
appointment.patient_id = 123;
appointment.staff_name = "Dr. Smith";
appointment.date = "2022-12-25";
appointment.time = "10:00 AM";
console.log(appointment.getAppointment()); //Hello dear! Your appointment with doctor Dr. Smith is scheduled by 10:00 AM on 2022-12-25
exports.default = Appointments;
