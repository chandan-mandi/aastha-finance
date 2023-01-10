
import React from 'react';
import CircleFilterIcon from '../CircleFilterIcon/CircleFilterIcon';
import NewOrderTable from './NewOrderTable';
import Pagination from './Pagination';

const NewOrder = () => {
    return (
        <div className='add-padding new-order-section'>
            <div className="new-order-search d-flex">
                <h4>Deposit Master</h4>
                <div className="search">
                    <label>
                        <input type="text" style={{ backgroundColor: '#fafafab0' }} />
                        {/* <FontAwesomeIcon className="faIcon" icon={faSearch} style={{color: 'red'}}></FontAwesomeIcon> */}
                        <i class="fa-solid fa-magnifying-glass faIcon"></i>
                    </label>
                </div>
                <CircleFilterIcon />
            </div>
            <NewOrderTable />
            <Pagination />
        </div>
    );
};

export default NewOrder;