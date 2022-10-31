import React from 'react';
import DeliveryStatusCard from './DeliveryStatusCard';

const DeliveryStatusOnMobile = ({ deliveryList }) => {
    return (
        <div className='add-padding'>
            <h4>Delivery Status</h4>
            <div className="search f-width">
                <label>
                    <i class="fa-solid fa-magnifying-glass faIcon left-side"></i>
                    <input type="text" placeholder="Search here" style={{ backgroundColor: '#f2eeee' }} />
                    <i class="fa-solid fa-filter faIcon"></i>
                </label>
            </div>
            {
                deliveryList.map(delivery => (
                    <DeliveryStatusCard key={delivery.id} delivery={delivery} />
                ))}
        </div>
    );
};

export default DeliveryStatusOnMobile;