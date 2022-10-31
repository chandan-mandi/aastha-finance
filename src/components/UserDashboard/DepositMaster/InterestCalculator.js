import React, { useState } from 'react';
import { Col, Row, Button, Card, ListGroup } from 'react-bootstrap';

const InterestCalculator = () => {
    const [p, setLoanAmount] = useState("");
    const [r, setRate] = useState("");
    const [t, setDuration] = useState("");
    const [durationType, setDurationType] = useState("");
    const [totalInterest, setTotalInterest] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [installment, setInstallment] = useState("");
    const [lastInstallment, setLastInstallment] = useState("");
    const [extraAmount, setExtraAmount] = useState("");
    console.log("loanamout", p, r, t);

    const calculate = () => {
        const monthlyCalculate = t / 12;
        const weeklyCalculate = t * 7 / 365;
        const dayWiseCalculate = t / 365;
        let simpleInterest = durationType === "in-days" ? (p * r * dayWiseCalculate) / 100 : durationType === "monthly" ? (p * r * monthlyCalculate) / 100 : durationType === "weekly" ? (p * r * weeklyCalculate) / 100 : (p * r * t) / 100;
        let amount = Number(p) + Number(simpleInterest);
        setTotalInterest(simpleInterest);
        setTotalAmount(amount);
        setInstallment(Number(amount) / t);
        const extraInstallmentAmount = Math.ceil(Number(amount) / t) * t - Math.ceil(amount);
        setExtraAmount(extraInstallmentAmount);
        const lastEMI = Math.ceil(Number(amount) / t) - extraInstallmentAmount;
        setLastInstallment(lastEMI);
        console.log("calcute simpleInterest", simpleInterest)
        console.log("calcute total amount", amount)
        console.log("extra Installment:", extraInstallmentAmount)
    }

    const handleChangeDurationType = (e) => {
        setDurationType(e.target.value);
        // calculate();
        console.log("type", e.target.value)
    }
    return (
        <div className='mt-3'>
            <Row>
                <Col md={7}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Row>
                            <Col md={6} sm={12}>
                                <label>Loan Amount</label>
                                <input
                                    type="text"
                                    className="our-form-input"
                                    onInput={(e) => setLoanAmount(e.target.value)}
                                />
                            </Col>
                            <Col md={6} sm={12}>
                                <label>Interest Rate</label>
                                <input
                                    type="text"
                                    className="our-form-input"
                                    onInput={(e) => setRate(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={12}>
                                <label>Duration</label>
                                <input
                                    type="text"
                                    className="our-form-input"
                                    onInput={(e) => setDuration(e.target.value)}
                                    onKeyUp={calculate}
                                />
                            </Col>
                            <Col md={6} sm={12}>
                                <label>Duration Type</label>
                                <select className="our-form-input" value={durationType} onChange={handleChangeDurationType} >
                                    <option value="yearly">yearly</option>
                                    <option value="monthly">monthly</option>
                                    <option value="weekly">weekly</option>
                                    <option value="in-days">in days</option>
                                </select>
                            </Col>
                        </Row>
                        <div className="text-center mt-4">
                            <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                                Loan Approved
                            </Button>
                        </div>
                    </form>
                </Col>
                <Col md={5}>
                    <div>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Loan Calculate</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item className='d-flex justify-content-between'>Principal Amount : <span className='right-side'> {Number(p)} </span></ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>Total Interest:<span> {Number(totalInterest).toFixed(2)}</span></ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>Total Amount :<span> {Number(totalAmount).toFixed(2)}</span></ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>{durationType} Installment Amount :<span> {Math.ceil(installment)}</span></ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'> Extra Amount :<span> {extraAmount}</span></ListGroup.Item>
                                <ListGroup.Item className='d-flex justify-content-between'>Last Installment Amount :<span> {Math.ceil(lastInstallment)}</span></ListGroup.Item>
                            </ListGroup>
                        </Card>
                        {/* <h2>Principal Amount : {Number(p)} </h2>
                        <h2>Total Interest: {Number(totalInterest).toFixed(2)}</h2>
                        <h2>Total Amount : {Number(totalAmount).toFixed(2)} </h2>
                        <h2>{durationType} Installment Amount : {Math.ceil(installment)} </h2>
                        <h3>Last Installment Amount : {Math.ceil(lastInstallment)}</h3> */}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default InterestCalculator;