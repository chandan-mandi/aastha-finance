import React from 'react';
import SelectBox from '../SelectBox/SelectBox';
import AddStaffTableList from './AddStaffTableList';

const AddStaffTable = () => {
    return (
        <div className='add-padding payment'>
            <SelectBox />
            <AddStaffTableList />
        </div>
    );
};

export default AddStaffTable;