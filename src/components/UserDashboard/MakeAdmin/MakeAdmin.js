
import React from 'react';
import { Link } from 'react-router-dom';
import AddminList from './AddminList';

const MakeAdmin = () => {
    return (
        <div className="add-padding">
            <div className="add-admin d-flex align-items-center" >
                <h6>Admin Profile</h6>
                <Link to="/dashboard/add-admin/fiil-up-details" className="view-all-btn d-flex align-items-center ms-3">Add Admin 
              
                <i class="fa-solid fa-user-plus ms-2"></i>
                </Link>
            </div>
            <AddminList />
        </div>
    );
};

export default MakeAdmin;