
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const BookingDetailsCard = () => {
    return (
        <>
            <Col md={3}>
                <Card style={{ backgroundColor: '#F2F3F6' }}>
                    <Row style={{ alignItems: 'center', padding: '5px 0' }}>
                        <Col md={4}>
                            <div className="card-icon-box">
                            <i class="far fa-file-alt"></i>
                            </div>
                        </Col>
                        <Col md={8}>
                            <h3>3,940</h3>
                            <p>Total Customer</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col md={3}>
                <Card style={{ backgroundColor: '#F2F3F6' }}>
                    <Row style={{ alignItems: 'center', padding: '5px 0' }}>
                        <Col md={4}>
                            <div className="card-icon-box">
                            <i class="far fa-file-alt"></i>
                            </div>
                        </Col>
                        <Col md={8}>
                            <h3>3,940</h3>
                            <p>Pending Customer</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col md={3}>
                <Card style={{ backgroundColor: '#F2F3F6' }}>
                    <Row style={{ alignItems: 'center', padding: '5px 0' }}>
                        <Col md={4}>
                            <div className="card-icon-box">
                            <i class="far fa-file-alt"></i>
                            </div>
                        </Col>
                        <Col md={8}>
                            <h3>3195</h3>
                            <p>Deposit Customer</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col md={3}>
                <Card style={{ backgroundColor: '#F2F3F6' }}>
                    <Row style={{ alignItems: 'center', padding: '5px 0' }}>
                        <Col md={4}>
                            <div className="card-icon-box">
                            <i class="far fa-file-alt"></i>
                            </div>
                        </Col>
                        <Col md={8}>
                            <h3>128</h3>
                            <p>Cancel Customer</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </>
    );
};

export default BookingDetailsCard;