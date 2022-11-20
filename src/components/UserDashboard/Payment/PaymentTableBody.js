import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentModeBox from './PaymentModeBox';

const PaymentTableBody = ({payment, handleSelectedPayment, selectedPayment}) => {
    const navigate = useNavigate();

    const accountStatementHandler = (ac_no) => {
        const uri = `ac-statement/${ac_no}`;
        navigate(uri)
    }
    return (
        <tbody>
            <tr onClick={() => accountStatementHandler(payment.account_no)}>
                <td style={{textAlign: 'center'}}>#{payment._id}</td>
                <td>{payment.name}</td>
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