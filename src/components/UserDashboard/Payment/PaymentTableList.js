import React, { useState } from 'react';
import PaymentTableBody from './PaymentTableBody';

const PaymentTableList = () => {
    const payments = [
        {
            id: 3445,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cashless"
        },
        {
            id: 3446,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cash"
        },
        {
            id: 3447,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cashless"
        },
        {
            id: 3448,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cashless"
        },
        {
            id: 3449,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cashless"
        },
        {
            id: 3450,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cash"
        },
        {
            id: 3451,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cashless"
        },
        {
            id: 3452,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cashless"
        },
        {
            id: 3453,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            registration_no: 5677646778,
            payment_date: "07/04/2022",
            payment_status: "Paid",
            payment_mode: "Cashless"
        },
    ]
    const [selectedPayment, setSelectedPayment] = useState("")
    // handler selected admin
    const handleSelectPayment = (e, id) => {
        console.log(e.target.checked, id);
        setSelectedPayment(id)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr style={{ fontWeight: "700" }}>
                        <td style={{textAlign: 'center'}}>User ID</td>
                        <td>Requested by</td>
                        <td>Phone no</td>
                        <td>Registration no</td>
                        <td>Payment Date</td>
                        <td>Payment Status</td>
                        <td>Payment Mode</td>
                    </tr>
                </thead>
                {
                    payments.map(payment => (
                        <PaymentTableBody key={payment.id} payment={payment} handleSelectAdmin={handleSelectPayment} selectedAdmin={selectedPayment}/>
                    ))}
            </table>
        </div>
    );
};

export default PaymentTableList;