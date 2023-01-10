import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Loader from '../../Loader/Loader';
import AcDetailsTable from './AcDetailsTable';

const AcDetailsBox = ({userDetail}) => {
    const [accounts, setAcs] = useState([]);
    const [totalPaidAmt, setTotalPaidAmt] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userDetail.account_no) {
            userDetail.account_no.map(ac => {
                fetch(`https://micro-finserv-sever-chandan-mandi.vercel.app/api/v1/account/${ac}`)
                    .then(res => res.json())
                    .then(data => {
                        // totalPaymentReceieve();
                        setAcs(oldArray => [...oldArray,data.data] );
                        setLoading(false)
                    })
            })
        }
        setLoading(false)
    }, [])
    console.log('accounts ', accounts)
    // totalPaymentReceieve()
    const totalPaymentReceieve = () => {
        let totalReceived = "";
        accounts.installments.map(installment => {
                if(installment.pay_amt){
                    console.log(installment.pay_amt)
                    totalReceived = Number(totalReceived) + Number(installment.pay_amt);
                }
            })
        setTotalPaidAmt(totalReceived);
        console.log("totalreceive", totalReceived)
    }
    return (
        <div className='payment'>
                                <div className=''>
                                    <h6>{userDetail.name.toUpperCase()}</h6>
                                    <h6>{userDetail.full_address ? userDetail.full_address.toUpperCase() : "-"}</h6>
                                </div>
                <div className='installment-table'>
                    <div>
                        <table>
                            <thead>
                                <tr style={{ fontWeight: "700", textAlign: 'center' }}>
                                    <td>Account No</td>
                                    <td>Date</td>
                                    <td>Amount</td>
                                    <td>Inst</td>
                                    <td>Pay</td>
                                    <td>Due</td>
                                </tr>
                            </thead>
                            {loading ? <Loader/> : 
                            accounts.length == 0 ? <p>Accoount Not Created!</p> : 
                            accounts.map(account => (
                                account == null ? "Account Not found!" :
                                <tbody>
                                <tr style={{ textAlign: 'center' }}>
                                    <td>{account?._id}</td>
                                    <td>{account?.createdAt}</td>
                                    <td>{account?.principal_amount} </td>
                                    <td>{account?.installment_amount} </td>
                                    <td>{totalPaidAmt}</td>
                                    <td>1000</td>
                                </tr>
                            </tbody>
                            ))
                            }
                        </table>
                    </div>
                </div>
        </div>
    );
};

export default AcDetailsBox;