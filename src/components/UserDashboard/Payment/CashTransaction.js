import React from 'react';
import { Col, Row, Button, Card, ListGroup } from 'react-bootstrap';


const CashTransaction = () => {

    const handleChangeCollector = (e) => {
        console.log("collector name : ", e.target.value);
    }
    return (
        <div>
            <h2>Cash Transaction</h2>
            <div className='mt-3'>
                <Row>
                    <Col md={7}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Collection Date</label>
                                    <input
                                        type="date"
                                        className="our-form-input"
                                        // onInput={(e) => setLoanAmount(e.target.value)}
                                    />
                                </Col>
                                <Col md={5} sm={12}>
                                    <label>Account No</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                    // onInput={(e) => setRate(e.target.value)}
                                    />
                                </Col>
                                <Col md={1} sm={4}>
                                    <label></label>
                                    <Button variant='secondary'>
                                        List
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={12}>
                                    <label>Due Date</label>
                                    <input
                                        type="date"
                                        className="our-form-input"
                                    // onInput={(e) => setDuration(e.target.value)}
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Amount</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                    // onInput={(e) => setDuration(e.target.value)}
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Remarks</label>
                                    <input
                                        type="text"
                                        className="our-form-input"
                                    // onInput={(e) => setDuration(e.target.value)}
                                    />
                                </Col>
                                <Col md={6} sm={12}>
                                    <label>Collector</label>
                                    <select className="our-form-input" onChange={handleChangeCollector} >
                                        <option value="yearly">yearly</option>
                                        <option value="monthly">monthly</option>
                                        <option value="weekly">weekly</option>
                                        <option value="in-days">in days</option>
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
                    <Col md={5}>
                        <div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default CashTransaction;