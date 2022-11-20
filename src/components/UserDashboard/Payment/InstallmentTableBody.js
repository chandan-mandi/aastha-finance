import React from 'react';

const InstallmentTableBody = ({ installment }) => {
    return (
        <tbody>
            <tr style={{ textAlign: 'center' }}>
                <td>{installment?.due_date}</td>
                <td>{installment.due_amt}</td>
                <td>{installment.pay_date ? installment.pay_date : "-"}</td>
                <td>{installment.pay_amt ? installment.pay_amt : "-"}</td>
            </tr>
        </tbody>
    );
};

export default InstallmentTableBody;