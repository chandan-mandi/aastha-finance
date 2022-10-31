import React from 'react';
import AddStaffTableBody from './AddStaffTableBody';

const AddStaffTableList = () => {
    const staffList = [
        {
            id: 3445,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3446,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3447,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3448,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3449,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3450,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3451,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3452,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
        {
            id: 3453,
            name: "Jiya",
            job_title: "Chief Mechanic",
            phone_no: 784897895,
            email: "jiya@gmail.com",
            dob: "09/09/22",
            state: "Maharastra",
            city: "Pune"
        },
    ]
    return (
        <div>
            <table>
                <thead>
                    <tr style={{ fontWeight: "700", backgroundColor: '#FFF8F8' }}>
                        <td style={{textAlign: 'center'}}>Employee ID</td>
                        <td>Name</td>
                        <td>Job title</td>
                        <td>Date of birth</td>
                        <td>Phone no</td>
                        <td>Email ID</td>
                        <td>State</td>
                        <td>City</td>
                        <td>Edit</td>
                    </tr>
                </thead>
                {
                    staffList.map(staff => (
                        <AddStaffTableBody key={staff.id} staff={staff}/>
                    ))}
            </table>
        </div>
    );
};

export default AddStaffTableList;