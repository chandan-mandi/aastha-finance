import React from 'react';
import NewOrderTableBody from './NewOrderTableBody';

const NewOrderTableList = () => {
    const ordersList = [
        {
            id: 3446,
            requested_by: "Mamoni Paul",
            father_name: "Subhas Paul",
            pan_no: "DK42903890",
            dob: "07/04/2022",
            address: "Selimabad, Jamalpur, 713408",
            phone_no: 8918308609,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM",
            aadhar_no: 784598347834,
            photo: "https://i.ibb.co/t3ZQ6MP/Max-R-Headshot-1.jpg",
            id_proof: "https://i.ibb.co/QYyd394/nict-aadhaar-permanent-enrollment-center-agar-malwa-shajapur-aadhaar-card-agents-la4wkwh8ay.webp",
            address_proof: "https://i.ibb.co/7y3KF23/Dtyjt-C4-U0-AADFod.jpg",
        },
        {
            id: 3445,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
        {
            id: 3447,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
        {
            id: 3448,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
        {
            id: 3449,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
        {
            id: 3450,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
        {
            id: 3451,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
        {
            id: 3452,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
        {
            id: 3453,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            order_date: "07/04/2022",
            drive: "Self Drive",
            order_time: "09:30 PM"
        },
    ]
    return (
        <div>
            <table>
                <thead>
                    <tr style={{ fontWeight: "700", backgroundColor: '#FFF8F8' }}>
                        <td style={{textAlign: 'center'}}>User ID</td>
                        <td>Customer Name</td>
                        <td>Phone no</td>
                        <td>Address</td>
                        <td>Father's Name</td>
                        <td>Loan Amount</td>
                        <td>Opening Date</td>
                    </tr>
                </thead>
                {
                    ordersList.map(order => (
                        <NewOrderTableBody key={order.id} order={order}/>
                    ))}
            </table>
        </div>
    );
};

export default NewOrderTableList;