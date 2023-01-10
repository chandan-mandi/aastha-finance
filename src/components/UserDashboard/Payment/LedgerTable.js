import React from 'react';
import InstallmentTableBody from './InstallmentTableBody';

const LedgerTable = ({selectCustomer, installmentDetail, loading}) => {
    return (
        <div>
            <div className='installment-table'>
                <div>
                    <table>
                        <thead>
                            <div className='ms-2'>
                                <h5>Name : {selectCustomer.name}</h5>
                                <h5>Address : {selectCustomer.full_address ? selectCustomer.full_address : "-"}</h5>
                            </div>
                            <tr style={{ fontWeight: "700", textAlign: 'center' }}>
                                <td>Due Date</td>
                                <td>Due Amt</td>
                                <td>Pay Date</td>
                                <td>Pay Amt</td>
                            </tr>
                        </thead>
                        {loading ? <div>
                            Loading...
                        </div> :
                            installmentDetail?.map((installment) => (
                                <InstallmentTableBody key={installment}
                                    installment={installment}
                                />
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LedgerTable;