import React from 'react';

const DeliveryStatusCard = ({delivery}) => {
    return (
        <div className='mt-4'>
            <div class="shadow p-3 mb-2 bg-white  delivery-status-card">
                <div className="card-content d-flex">
                    <div className="table-head">
                        <h6>ID</h6>
                        <h6>Requested By</h6>
                        <h6>Registration no</h6>
                        <h6>Assign</h6>
                        <h6>Status</h6>
                    </div>
                    <div className="table-body ms-2">
                        <h6 style={{color: '#000', fontWeight: "700"}}>#{delivery.id}</h6>
                        <h6>{delivery.requested_by}</h6>
                        <h6>{delivery.registration_no}</h6>
                        <h6>Aryan
                        <i class="fa-solid fa-angle-down ms-1"></i>
                        </h6>
                        <h6 className={delivery.delivery_status === "Delivered" ? "delivered": "not-delivered"}>{delivery.delivery_status}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryStatusCard;