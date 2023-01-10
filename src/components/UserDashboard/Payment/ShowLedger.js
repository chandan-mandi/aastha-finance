import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LedgerTable from './LedgerTable';
import ShowLedgerTable from './ShowLedgerTable';

const ShowLedger = ({ selectCustomer, installmentDetail, loading, acDetail }) => {
    console.log("ins", installmentDetail);
    const [paySum, setPaySum] = useState("");
    // const calculatePayAmt = () => {
    //     const paymentSum = installmentDetail.map(element => element.pay_amt > 0 && element.pay_amt).reduce((a, b) => a + b, 0);
    //     setPaySum(paymentSum);
    // }
    // calculatePayAmt();
    useEffect(() => {
        const paymentSum = installmentDetail.map(element => element.pay_amt > 0 && element.pay_amt).reduce((a, b) => a + b, 0);
        setPaySum(paymentSum);
    }, [installmentDetail])
    return (
        <div className='ledger-box mt-3 p-2'>
            <h5>{selectCustomer.name?.toUpperCase()}</h5>
            <h5>SELIMABAD/JAMALPUR/713408</h5>
            <Row className='justify-content-between'>
                <Col md={4} sm={12}>
                    <Row>
                        <Col md={8} sm={12}>
                            <h6>Account No</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{selectCustomer.account_no}</h6>
                        </Col>
                        <Col md={8} sm={12}>
                            <h6>Loan Amount</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{acDetail.principal_amount}</h6>
                        </Col>
                        <Col md={8} sm={12}>
                            <h6>Installment Amount</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{acDetail.installment_amount}</h6>
                        </Col>
                        <Col md={8} sm={12}>
                            <h6>Loan Date</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{selectCustomer.opening_date}</h6>
                        </Col>
                        <Col md={8} sm={12}>
                            <h6>Duration</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{acDetail.loan_duration} {acDetail.loan_duration_type == "monthly" && "Months"}</h6>
                        </Col>
                        <Col md={8} sm={12}>
                            <h6>Interest Rate</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{acDetail.interest_rate}%</h6>
                        </Col>
                    </Row>
                </Col>
                {/* <Col md={4} sm={12}></Col> */}
                <Col md={4} sm={12} className='user-doc-img'>
                    <div className='img-box'>
                        <img src={selectCustomer.photo} alt="" width={200} height={200} />
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md={4} sm={12}>
                    <Row>
                        <Col md={8} sm={12}>
                            <h6>Payment</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{paySum}</h6>
                        </Col>
                    </Row>
                </Col>
                <Col md={4} sm={12}></Col>
                <Col md={4} sm={12}>
                    <Row>
                        <Col md={8} sm={12}>
                            <h6>Total Due</h6>
                        </Col>
                        <Col md={4} sm={12}>
                            <h6>{acDetail.principal_amount - paySum}</h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr />
            <ShowLedgerTable selectCustomer={selectCustomer} installmentDetail={installmentDetail} loading={loading} />
        </div>
    );
};

export default ShowLedger;