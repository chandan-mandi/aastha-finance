import React from 'react';
import CircleFilterIcon from '../CircleFilterIcon/CircleFilterIcon';
import Pagination from '../NewOrder/Pagination';
import AddStaffTable from './AddStaffTable';

const AddStaff = () => {
    return (
        <div className='add-padding add-staff-section'>
            <div className="new-order-search d-flex">
                <h4>Staff Profile</h4>
                <div className="ms-4">
                <i class="bg-white circle-icon fa-solid fa-user-plus shadow"></i>
                </div>
                <div className="search">
                    <label>
                        <input type="text" style={{backgroundColor : '#f2eeee'}}/>
                        <i class="fa-solid fa-magnifying-glass faIcon"></i>
                    </label>
                </div>
                <CircleFilterIcon />
            </div>
            <AddStaffTable />
            <Pagination />
        </div>
    );
};

export default AddStaff;