import React from 'react';
import SelectBox from '../SelectBox/SelectBox';
import CashTransaction from './CashTransaction';
import PaymentTableList from './PaymentTableList';
import ShowLedger from './ShowLedger';

const Payment = () => {
    return (
        <div className='add-padding payment'>
            <CashTransaction />
            {/* <ShowLedger /> */}
            {/* <SelectBox /> */}
            {/* <PaymentTableList /> */}
        </div>
    );
};

export default Payment;