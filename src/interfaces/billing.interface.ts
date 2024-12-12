import BILLING_STATUS from "../constants/billingStats.emus";

interface IBilling{
    bill_id: number;
    patient_id: number;
    amount: number;
    status: BILLING_STATUS;
    payment_date: number;
    created_at: number;
}









export default IBilling;