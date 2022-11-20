import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import InstallmentTableBody from './InstallmentTableBody';
import MatchedUserTable from './MatchedUserTable';

const ModalBox = ({accountSelectHanlder}) => {
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get(`https://micro-finserv.herokuapp.com/api/v1/user`)
        .then(res => {
            setUsers(res.data.data)
        })
    },[])
    const searchUser = (users, searchText) => {
        const result = [];
        for(const user of users) {
            // if(user.name.toLowerCase().includes(searchText.toLowerCase())){
            //     console.log(user.name)
            //     result.push(user)
            // }
            if(user.name.toLowerCase().indexOf(searchText.toLowerCase()) != -1){
                result.push(user);
            }
        }
        return result;
    }
    const matched = searchUser(users, searchText)
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                List
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            {/* <Form.Control as="textarea" rows={3} /> */}
                            <div className='payment'>
                                <table>
                                    <thead>
                                        <tr style={{ fontWeight: "700", textAlign: 'center' }}>
                                            <td>Name</td>
                                            <td>Account No</td>
                                        </tr>
                                    </thead>
                                    { 
                                        matched?.map((user) => (
                                            <MatchedUserTable key={user._id} 
                                            user={user} 
                                            accountSelectHanlder={accountSelectHanlder} 
                                            handleClose={handleClose}
                                            />
                                        ))
                                        }
                                </table>
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalBox;