import React from 'react';
import DeliveryTableBody from './DeliveryTableBody';

const DeliveryTableList = ({deliveryList}) => {
    
    return (
        <div>
            <table>
                <thead>
                    <tr style={{ fontWeight: "700", backgroundColor: '#FFF8F8' }}>
                        <td style={{textAlign: 'center'}}>User ID</td>
                        <td>Requested by</td>
                        <td>Phone no</td>
                        <td>Vehicle Issue</td>
                        <td>Registration no</td>
                        <td>Delivery date</td>
                        <td>Delivery Status</td>
                    </tr>
                </thead>
                {
                    deliveryList.map(delivery => (
                        <DeliveryTableBody key={delivery.id} delivery={delivery}/>
                    ))}
            </table>
        </div>
    );
};

export default DeliveryTableList;