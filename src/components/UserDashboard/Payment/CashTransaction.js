import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Card, ListGroup } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import InstallmentTableBody from './InstallmentTableBody';
import ModalBox from './ModalBox';


const CashTransaction = () => {
    const [installmentDetail, setInstallments] = useState();
    const [selectAc, setSelectAc] = useState("")
    const [selectCustomer, setSelectCustomer] = useState([])
    const [loading, setLoading] = useState(true);
    const [updatedAc, setUpdatedAc] = useState(false);
    const [value, onChange] = useState(new Date());
    const [dueDate, setDueDate] = useState(new Date());

    const { register, handleSubmit } = useForm();

    const handleChangeCollector = (e) => {
        console.log("collector name : ", e.target.value);
    }

    useEffect(() => {
        axios.get(`https://micro-finserv.herokuapp.com/api/v1/account/${selectAc}`)
            .then(res => {
                const data = res.data.data;
                setInstallments(data.installments)
                setLoading(false)
                setUpdatedAc(false)
            })
    }, [selectAc, updatedAc])

    const onSubmit = (data) => {

        let day = value.getDate();
        let month = value.getMonth() + 1;
        let year = value.getFullYear();
        const pay_date = (`${day}-${month}-${year}`);
        let due_day = dueDate.getDate();
        let due_month = dueDate.getMonth() + 1;
        let due_year = dueDate.getFullYear();
        const due_date = (`${due_day}-${due_month}-${due_year}`);
        console.log('pay-date', pay_date)
        // const due_date= "12-11-2022"
        const cashCollection = {
            due_date: due_date,
            pay_date: pay_date,
            pay_amt: data.pay_amt,
            remarks: data.remarks,
            collector: data.collector
        }
        axios.patch(`https://micro-finserv.herokuapp.com/api/v1/account/${selectAc}`, cashCollection)
        .then(res => {
            console.log(res.data)
            if(res.data.status = 'success'){
                setUpdatedAc(true)
                return swal("Successfully Updated!", "Your account has been successfully updated.", "success");
            }
        })

    }

    // const date = new Date();

    const pad = (num) => {
        num = num.toString();
        while (num.length < 2) num = "0" + num;
        return num;
    }
    let text = ["05-06-2022"];
    for (let i = 0; i < 95; i++) {
        let day = Number(text[i]?.slice(0, 2));
        let month = Number(text[i]?.slice(3, 5));
        let year = Number(text[i]?.slice(6, 10));
        // console.log('month', month)
        if (month == 2 || month == 4 || month == 6) {
            const monthWithZero = pad(month)
            if (day <= 24) {
                if (day < 10) {
                    const newDate = pad(day + 7)
                    text.push(`${newDate}-${monthWithZero}-${year}`);
                } else {
                    text.push(`${day + 7}-${monthWithZero}-${year}`);
                }
            }
            else {
                const latest_day = 7 - (30 - day);
                const newDate = pad(latest_day)
                const nextMonth = "0" + (month + 1);
                text.push(`${newDate}-${nextMonth}-${year}`);
            }
        }
        else if (month == 9) {
            const monthWithZero = pad(month)
            if (day <= 24) {
                if (day < 10) {
                    const newDate = pad(day + 7)
                    text.push(`${newDate}-${monthWithZero}-${year}`);
                } else {
                    text.push(`${day + 7}-${monthWithZero}-${year}`);
                }
            }
            else {
                const latest_day = 7 - (30 - day);
                const newDate = pad(latest_day)
                const nextMonth = (month + 1);
                text.push(`${newDate}-${nextMonth}-${year}`);
            }
        }
        else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8) {
            const monthWithZero = pad(month)
            if (day <= 24) {
                if (day < 10) {
                    const newDate = pad(day + 7)
                    text.push(`${newDate}-${monthWithZero}-${year}`);
                } else {
                    text.push(`${day + 7}-${monthWithZero}-${year}`);
                }
            }
            else {
                const latest_day = 7 - (31 - day);
                const newDate = pad(latest_day);
                const nextMonth = pad(month + 1);
                text.push(`${newDate}-${nextMonth}-${year}`);
            }
        }
        else if (month == 10) {
            if (day <= 24) {
                if (day < 10) {
                    const newDate = pad(day + 7)
                    text.push(`${newDate}-${month}-${year}`);
                } else {
                    text.push(`${day + 7}-${month}-${year}`);
                }
            }
            else {
                const latest_day = 7 - (30 - day);
                const newDate = pad(latest_day)
                text.push(`${newDate}-${month + 1}-${year}`);
            }
        }
        else if (month == 11) {
            if (day <= 23) {
                if (day < 10) {
                    const newDate = pad(day + 7)
                    text.push(`${newDate}-${month}-${year}`);
                } else {
                    text.push(`${day + 7}-${month}-${year}`);
                }
            }
            else {
                const latest_day = 7 - (30 - day);
                const newDate = pad(latest_day)
                text.push(`${newDate}-${month + 1}-${year}`);
            }
        }
        else if (month == 12) {
            if (day <= 24) {
                if (day < 10) {
                    const newDate = pad(day + 7)
                    text.push(`${newDate}-${month}-${year}`);
                } else {
                    text.push(`${day + 7}-${month}-${year}`);
                }
            }
            else {
                const latest_day = 7 - (31 - day);
                const newDate = pad(latest_day);
                const januaryMonth = "0" + 1;
                text.push(`${newDate}-${januaryMonth}-${year + 1}`);
            }
        }
    }
    const accountSelectHanlder = (ac) => {
        console.log('ac no', ac)
        setSelectAc(ac.account_no)
        setSelectCustomer(ac)
    }

    // console.log(text)
    return (
        <div>
            <h2>Cash Collection</h2>
            <div className='mt-3'>
                <Row>
                    <Col md={5}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Due Date</label>
                                    {/* <input
                                        type="date"
                                        className="our-form-input"
                                        {...register("due_date", { required: true })}
                                    /> */}
                                    <DatePicker className="our-form-input" onChange={setDueDate} value={dueDate} />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Account No</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                        defaultValue={selectAc}
                                    // onInput={(e) => setRate(e.target.value)}
                                    />
                                </Col>
                                <Col md={2} sm={12}>
                                    <label>Search</label>
                                    {/* <Button variant='secondary'>
                                        List
                                    </Button> */}
                                    <ModalBox accountSelectHanlder={accountSelectHanlder} />
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col md={6} sm={12}>
                                    <label>Pay Date</label>
                                    {/* <input
                                        type="date"
                                        className="our-form-input"
                                        {...register("pay_date", { required: true })}
                                    /> */}
                                    <DatePicker className="our-form-input" onChange={onChange} value={value} />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Pay Amount</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                        {...register("pay_amt", { required: true })}
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Remarks</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                        {...register("remarks")}
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Collector</label>
                                    <select className="our-form-input"
                                        onChange={handleChangeCollector}
                                        {...register("collector", { required: true })}
                                    >
                                        <option value="Mouma">Mouma</option>
                                        <option value="Miraz">Miraz</option>
                                        <option value="Soma">Soma</option>
                                        <option value="Barun">Barun</option>
                                    </select>
                                </Col>
                            </Row>
                            <div className="text-center mt-4">
                                <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                                    Post
                                </Button>
                            </div>
                        </form>
                    </Col>
                    <Col md={7} className='p-2'>
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
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CashTransaction;