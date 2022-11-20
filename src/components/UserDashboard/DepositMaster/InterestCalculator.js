import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row, Button, Card, ListGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const InterestCalculator = ({ userDetail }) => {
    const [p, setLoanAmount] = useState("");
    const [r, setRate] = useState("");
    const [t, setDuration] = useState("");
    const [durationType, setDurationType] = useState("");
    const [totalInterest, setTotalInterest] = useState("");
    const [totalAmount, setTotalAmount] = useState("");
    const [installment, setInstallment] = useState("");
    const [lastInstallment, setLastInstallment] = useState("");
    const [extraAmount, setExtraAmount] = useState("");
    const { register, handleSubmit, reset } = useForm();


    const calculate = () => {
        const monthlyCalculate = t / 12;
        const weeklyCalculate = t * 7 / 365;
        const dayWiseCalculate = t / 365;
        let simpleInterest = durationType === "in-days" ? (p * r * dayWiseCalculate) / 100 : durationType === "monthly" ? (p * r * monthlyCalculate) / 100 : durationType === "weekly" ? (p * r * weeklyCalculate) / 100 : (p * r * t) / 100;
        let amount = Number(p) + Number(simpleInterest);
        setTotalInterest(Math.ceil(simpleInterest));
        setTotalAmount(Math.ceil(amount));
        setInstallment(Math.ceil(Number(amount) / t));
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

    const onSubmit = (data) => {
        console.log(typeof (data.principal))
        console.log(typeof (p))

        // installment date creation
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        const pad = (num) => {
            num = num.toString();
            while (num.length < 2) num = "0" + num;
            return num;
        }
        let inst_dates = [currentDate];
        for (let i = 0; i < t-1; i++) {
            let day = Number(inst_dates[i]?.slice(0, 2));
            let month = Number(inst_dates[i]?.slice(3, 5));
            let year = Number(inst_dates[i]?.slice(6, 10));
            console.log('month', month)
            if (month == 2 || month == 4 || month == 6) {
                const monthWithZero = pad(month)
                if (day <= 24) {
                    if (day < 10) {
                        const newDate = pad(day + 7)
                        inst_dates.push(`${newDate}-${monthWithZero}-${year}`);
                    } else {
                        inst_dates.push(`${day + 7}-${monthWithZero}-${year}`);
                    }
                }
                else {
                    const latest_day = 7 - (30 - day);
                    const newDate = pad(latest_day)
                    const nextMonth = "0" + (month + 1);
                    inst_dates.push(`${newDate}-${nextMonth}-${year}`);
                }
            }
            else if (month == 9) {
                const monthWithZero = pad(month)
                if (day <= 24) {
                    if (day < 10) {
                        const newDate = pad(day + 7)
                        inst_dates.push(`${newDate}-${monthWithZero}-${year}`);
                    } else {
                        inst_dates.push(`${day + 7}-${monthWithZero}-${year}`);
                    }
                }
                else {
                    const latest_day = 7 - (30 - day);
                    const newDate = pad(latest_day)
                    const nextMonth = (month + 1);
                    inst_dates.push(`${newDate}-${nextMonth}-${year}`);
                }
            }
            else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8) {
                const monthWithZero = pad(month)
                if (day <= 24) {
                    if (day < 10) {
                        const newDate = pad(day + 7)
                        inst_dates.push(`${newDate}-${monthWithZero}-${year}`);
                    } else {
                        inst_dates.push(`${day + 7}-${monthWithZero}-${year}`);
                    }
                }
                else {
                    const latest_day = 7 - (31 - day);
                    const newDate = pad(latest_day);
                    const nextMonth = pad(month + 1);
                    inst_dates.push(`${newDate}-${nextMonth}-${year}`);
                }
            }
            else if (month == 10) {
                if (day <= 24) {
                    if (day < 10) {
                        const newDate = pad(day + 7)
                        inst_dates.push(`${newDate}-${month}-${year}`);
                    } else {
                        inst_dates.push(`${day + 7}-${month}-${year}`);
                    }
                }
                else {
                    const latest_day = 7 - (30 - day);
                    const newDate = pad(latest_day)
                    inst_dates.push(`${newDate}-${month + 1}-${year}`);
                }
            }
            else if (month == 11) {
                if (day <= 23) {
                    if (day < 10) {
                        const newDate = pad(day + 7)
                        inst_dates.push(`${newDate}-${month}-${year}`);
                    } else {
                        inst_dates.push(`${day + 7}-${month}-${year}`);
                    }
                }
                else {
                    const latest_day = 7 - (30 - day);
                    const newDate = pad(latest_day)
                    inst_dates.push(`${newDate}-${month + 1}-${year}`);
                }
            }
            else if (month == 12) {
                if (day <= 24) {
                    if (day < 10) {
                        const newDate = pad(day + 7)
                        inst_dates.push(`${newDate}-${month}-${year}`);
                    } else {
                        inst_dates.push(`${day + 7}-${month}-${year}`);
                    }
                }
                else {
                    const latest_day = 7 - (31 - day);
                    const newDate = pad(latest_day);
                    const januaryMonth = "0" + 1;
                    inst_dates.push(`${newDate}-${januaryMonth}-${year + 1}`);
                }
            }
        }

        console.log(inst_dates)
        let inst_detail = [];
        inst_dates.forEach(date => {
            const obj = {"due_date": date, "due_amt": installment}
            inst_detail.push(obj)
        });
        
        const loan_data = {
            principal_amount: Number(p),
            interest_rate: Number(r),
            loan_duration: Number(t),
            loan_duration_type: durationType,
            installments: inst_detail,
            total_interest: totalInterest,
            total_amt_with_interest: totalAmount,
            installment_amount: installment,
            last_installment: lastInstallment,
            extra_amount: extraAmount
        }
        console.log("ins details", loan_data)
        const loading = toast.loading('Uploading...Please wait!')
        axios.post(`https://micro-finserv.herokuapp.com/api/v1/account?id=${userDetail._id}`, loan_data)
            .then(res => {
                if (res) {
                    console.log("from server: ",res.data)
                    toast.success('Added', {
                        id: loading,
                    });
                    console.log("sucesssful")
                    reset();
                    return swal("Successfully Added!", "Your loan has been successfully approved.", "success");
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='mt-3'>
            <Row>
                <Col md={7}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={6} sm={12}>
                                <label>Loan Amount</label>
                                <input
                                    type="number"
                                    className="our-form-input"
                                    onInput={(e) => setLoanAmount(e.target.value)}
                                    {...register("principal", { required: true })}
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