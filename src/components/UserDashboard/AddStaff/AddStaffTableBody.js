import React from 'react';

const AddStaffTableBody = ({ staff }) => {
    return (
        <tbody>
            <tr>
                <td style={{ textAlign: 'center' }}>#{staff.id}</td>
                <td>{staff.name}</td>
                <td>{staff.job_title}</td>
                <td>{staff.dob}</td>
                <td>{staff.phone_no}</td>
                <td>{staff.email}</td>
                <td>{staff.state}</td>
                <td>{staff.city}</td>
                <td>Edit</td>
            </tr>
        </tbody>
    );
};

export default AddStaffTableBody;