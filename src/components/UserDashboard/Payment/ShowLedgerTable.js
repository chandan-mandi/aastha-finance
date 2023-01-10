import React from 'react';
import Loader from '../../Loader/Loader';
import InstallmentTableBody from './InstallmentTableBody';

const ShowLedgerTable = ({ installmentDetail, loading}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr style={{ fontWeight: "700", backgroundColor: '#FFF8F8', textAlign: 'center' }}>
                        <td>Due Date</td>
                        <td>Due Amt</td>
                        <td>Pay Date</td>
                        <td>Pay Amt</td>
                    </tr>
                </thead>
                {loading ? <Loader /> :
                    installmentDetail?.map((installment) => (
                        <InstallmentTableBody key={installment}
                            installment={installment}
                        />
                    ))
                }
            </table>
        </div>
    );
};

export default ShowLedgerTable;