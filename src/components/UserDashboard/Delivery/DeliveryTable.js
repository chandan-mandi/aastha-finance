import React from 'react';
import SelectBox from '../SelectBox/SelectBox';
import DeliveryTableList from './DeliveryTableList';

const DeliveryTable = ({deliveryList}) => {
    return (
        <div className='add-padding payment'>
            <SelectBox />
            <DeliveryTableList deliveryList={deliveryList}/>
        </div>
    );
};

export default DeliveryTable;