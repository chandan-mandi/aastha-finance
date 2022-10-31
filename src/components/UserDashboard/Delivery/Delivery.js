
import React from 'react';
import Pagination from '../NewOrder/Pagination';
import DeliveryStatusOnMobile from './DeliveryStatusOnMobile/DeliveryStatusOnMobile';
import DeliveryTable from './DeliveryTable';

const Delivery = () => {
    const deliveryList = [
        {
            id: 3445,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Delivered"
        },
        {
            id: 3446,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Delivered"
        },
        {
            id: 3447,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Delivered"
        },
        {
            id: 3448,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Not delivered"
        },
        {
            id: 3449,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Not delivered"
        },
        {
            id: 3450,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Delivered"
        },
        {
            id: 3451,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Not delivered"
        },
        {
            id: 3452,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Delivered"
        },
        {
            id: 3453,
            requested_by: "Rachel mike",
            phone_no: 5677646778,
            vehicle_issue: "Vehicle issues statement",
            delivery_date: "09/09/22",
            registration_no: "RH6478475888",
            delivery_status: "Delivered"
        }
    ]
    return (
        <>
        <div className='add-padding new-order-section delivery-section'>
            <div className="new-order-search d-flex">
                <h4>Delivery Status</h4>
                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here" style={{ backgroundColor: '#f2eeee' }} />
                        {/* <FontAwesomeIcon className="faIcon" icon={faSearch} style={{ color: 'red' }}></FontAwesomeIcon> */}
                    </label>
                </div>
                <div className="filter-icon-box">
                <i class="fa-solid fa-filter circle-icon shadow bg-white"></i>
                </div>
            </div>
            <DeliveryTable deliveryList={deliveryList}/>
            <Pagination />
        </div>
        <div className="delivery-section-mobile">
            <DeliveryStatusOnMobile deliveryList={deliveryList}/>
        </div>
        </>
    );
};

export default Delivery;