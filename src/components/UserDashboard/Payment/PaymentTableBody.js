import React from 'react';
import PaymentModeBox from './PaymentModeBox';

const PaymentTableBody = ({payment, handleSelectedPayment, selectedPayment}) => {
    return (
        <tbody>
            <tr>
                <td style={{textAlign: 'center'}}>#{payment.id}</td>
                <td>{payment.requested_by}</td>
                <td>{payment.phone_no}</td>
                <td>{payment.registration_no}</td>
                <td>{payment.payment_date}</td>
                <td style={{textAlign: 'center', color: '#16d129', fontWeight: '500'}}>
                    {payment.payment_status}
                    </td>
                <td>
                    <PaymentModeBox />
                </td>
            </tr>
        </tbody>
    );
};

export default PaymentTableBody;