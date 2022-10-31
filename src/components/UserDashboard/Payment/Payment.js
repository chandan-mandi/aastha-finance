import React from 'react';
import SelectBox from '../SelectBox/SelectBox';
import CashTransaction from './CashTransaction';
import PaymentTableList from './PaymentTableList';

const Payment = () => {
    return (
        <div className='add-padding payment'>
            <CashTransaction />
            <SelectBox />
            <PaymentTableList />
        </div>
    );
};

export default Payment;