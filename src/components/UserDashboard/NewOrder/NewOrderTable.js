import React from 'react';
import SelectBox from '../SelectBox/SelectBox';
import NewOrderTableList from './NewOrderTableList';

const NewOrderTable = () => {
    return (
        <div className='add-padding payment'>
            <SelectBox />
            <NewOrderTableList />
        </div>
    );
};

export default NewOrderTable;