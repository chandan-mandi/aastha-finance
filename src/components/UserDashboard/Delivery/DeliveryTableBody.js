import React from 'react';

const DeliveryTableBody = ({delivery}) => {
    return (
        <tbody>
            <tr>
                <td style={{textAlign: 'center'}}>#{delivery.id}</td>
                <td>{delivery.requested_by}</td>
                <td>{delivery.phone_no}</td>
                <td>{delivery.vehicle_issue}</td>
                <td>{delivery.registration_no}</td>
                <td>
                    {delivery.delivery_date}
                    </td>
                <td>
                    <p className={delivery.delivery_status === "Delivered" ? "delivered": "not-delivered"}>
                    {delivery.delivery_status}
                    </p>
                </td>
            </tr>
        </tbody>
    );
};

export default DeliveryTableBody;