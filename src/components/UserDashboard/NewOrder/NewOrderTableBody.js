import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const NewOrderTableBody = ({order}) => {
    const navigate = useNavigate();

    const updateHandler = (userId) => {
        if (userId.id === 3445) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }
        const uri = `update/${userId._id}`;
        navigate(uri, {state: {userId}});
    }
    return (
        <tbody>
            <tr onClick={() => updateHandler(order)}>
                <td style={{textAlign: 'center'}}>#{order._id}</td>
                <td>{order.name}</td>
                <td>{order.phone_no}</td>
                <td>{order.vehicle_issue}</td>
                <td>{order.drive}</td>
                <td>
                    {order.order_time}
                    </td>
                <td>
                    {order.order_date}
                </td>
            </tr>
        </tbody>
    );
};

export default NewOrderTableBody;