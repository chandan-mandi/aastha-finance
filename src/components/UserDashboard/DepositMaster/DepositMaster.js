import axios from 'axios';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Calculator from './Calculator';
import InterestCalculator from './InterestCalculator';

const DepositMaster = () => {
    const location = useLocation();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        if (!data.img[0]) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!')
        let imageURL = "";
        console.log(data.img[0])
        if (data.img[0]) {
            const imageData = new FormData();
            imageData.set('key', 'acb2d4c7a68ef1bf06d396d73adb600a')
            imageData.append('image', data.img[0]);
            try {
                const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
                console.log(res)
                imageURL = res.data.data.display_url;
                toast.dismiss(loading);
            } catch (error) {
                toast.dismiss(loading);
                return toast.error('Failed to upload the image!');
            }
        }
        const serviceInfo = {
            name: data.name,
            mileage: data.mileage,
            price: data.price,
            img: imageURL,
            details: data.details
        }
        console.log(serviceInfo)
        axios.post('https://safe-crag-22535.herokuapp.com/availableCars', serviceInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Added', {
                        id: loading,
                    });
                    reset();
                    return swal("Successfully Added!", "Your car has been successfully added.", "success");
                }
            })
    }
    console.log(location.state.userId)
    return (
        <div >
            <div className='m-3'>
                {/* <Calculator /> */}
                <InterestCalculator userDetail={location.state.userId} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row className='deposit-master'>
                            <Col style={{ width: '1550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                                <Row>
                                    <Col md={4} sm={12}>
                                        <label>Customer Name</label>
                                        <input
                                            className="our-form-input"
                                            type="text"
                                            defaultValue={location.state.userId.name}
                                            disabled
                                        />
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <label>Father Name</label>
                                        <input
                                            className="our-form-input"
                                            type="text"
                                            defaultValue={location.state.userId.father_name}
                                            disabled
                                        />
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <label>Mobile No</label>
                                        <input
                                            type="number"
                                            className="our-form-input"
                                            defaultValue={location.state.userId.mobile_no}
                                            disabled
                                        />
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <label>Aadhar No</label>
                                        <input
                                            type="number"
                                            className="our-form-input"
                                            defaultValue={location.state.userId.aadhar_no}
                                            disabled
                                        />
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <label>PAN No</label>
                                        <input
                                            className="our-form-input"
                                            type="text"
                                            defaultValue={location.state.userId.pan_no}
                                            disabled
                                        />
                                    </Col>
                                    <Col md={4} sm={12}>
                                        <label>Date of Birth</label>
                                        <input
                                            className="our-form-input"
                                            type="text"
                                            defaultValue={location.state.userId.dob}
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <Row className='user-doc-img'>
                                    <Col md={4} sm={12} className='mt-1'>
                                        <label>Customer Photo</label>
                                        <div>
                                            <img src={location.state.userId.photo} alt="" width={200} height={200} />
                                        </div>
                                    </Col>
                                    <Col md={4} sm={12} className='mt-1'>
                                        <label>Customer ID Proof</label>
                                        <div>
                                            <img src={location.state.userId.id_proof} alt="" width={200} height={200} />
                                        </div>
                                    </Col>
                                    <Col md={4} sm={12} className='mt-1'>
                                        <label>Customer Address Proof</label>
                                        <div>
                                            <img src={location.state.userId.address_proof} alt="" width={200} height={200} />
                                        </div>
                                    </Col>

                                </Row>
                                <Row className='mt-1'>
                                    <Col md={6} sm={12}>
                                        <label>Opening Date</label>
                                        <input
                                            className="our-form-input"
                                            type="text"
                                            defaultValue={location.state.userId.opening_date}
                                            disabled
                                        />
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <label>Customer Full Address</label>
                                        <textarea
                                            type="textarea"
                                            style={{ height: '100px' }}
                                            className="our-form-input"
                                            defaultValue={location.state.userId.full_address}
                                            disabled
                                        />
                                    </Col>
                                </Row>
                                <br />
                                {/* <Button type="submit">Send</Button> */}
                            </Col>
                        </Row>
                    </div>


                    <Toaster />
                </form>
                {/* <CalculatorForm /> */}

            </div>
        </div>
    );
};

export default DepositMaster;