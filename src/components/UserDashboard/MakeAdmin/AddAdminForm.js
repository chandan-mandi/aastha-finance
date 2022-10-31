import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const AddAdminForm = () => {
    return (
        <div className="add-padding">

            <div className="admin-added-section">
                <h4>Add Admin</h4>
                <p>In this section, be sure to fill in the priority information requested with he personnel completely . It will be useful to add other information in the add detail section . Your record approve here</p>
                <Form>
                    <div className='add-admin-form mt-4'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name / Surname</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col md={4} sm={4}>
                                        <Card style={{ width: '100%', marginTop: "20px" }}>
                                            <Card.Img variant="top" src="https://i.ibb.co/dbg2G1Q/1642359447115-2.png" />
                                        </Card>
                                    </Col>
                                    <Col md={8} sm={8}>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Employee Id</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Assign Username</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Pasword</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                        </Row>

                    </div>
                    <div className="submitting-btn">
                        <Button variant='outline-primary' className="px-5">Update</Button>
                        <Button variant='primary' style={{ backgroundColor: "#6658DD" }} className='px-5 ms-2'>Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddAdminForm;