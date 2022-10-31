import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TableBody from './TableBody';

const AddminList = () => {
    const admins = [
        {
            id: 3526,
            name: "Adrila",
            userName: "Adrila4556",
            password: "Adrila4556",
        },
        {
            id: 2568,
            name: "Adrila",
            userName: "Adrila4556",
            password: "Adrila4556",
        },
    ]
    const [selectedAdmin, setSelectedAdmin] = useState("");
    const {pathname} = useLocation();
    // handler selected admin
    const handleSelectAdmin = (e, id) => {
        console.log(e.target.checked, id);
        setSelectedAdmin(id)
    }

    // delete handler 
    const handleDelete = (id) => {
        console.log(id, 'This Admin Deleted');
    }
    return (
        <div className='admin-list'>
            <table>
                <thead>
                    <tr style={{ fontWeight: "700" }}>
                        <td></td>
                        <td >{pathname === "/dashboard/payment" ? "User ID" : "Id"}</td>
                        <td>Name</td>
                        <td>User Name</td>
                        <td>Password</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                {
                    admins.map(admin => (
                        <TableBody key={admin.id} admin={admin} handleDelete={handleDelete} handleSelectAdmin={handleSelectAdmin} selectedAdmin={selectedAdmin}/>
                    ))}
            </table>
        </div>
    );
};

export default AddminList;