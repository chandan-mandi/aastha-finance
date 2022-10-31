import axios from 'axios';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';



const AddCarDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        if (!data.img[0]) {
            return toast.error('Please upload an image!');
        }
        const loading = toast.loading('Uploading...Please wait!')
        let imageURL = "";
        console.log(data.img[0])
        if(data.img[0]){
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
    return (
        <div className='mt-1'>
            <h2>Add a Customer Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row>
                        <Col style={{ width: '1550px', margin: '0 auto' }} md={12} xs={12} className="pr-md-4">
                            <Row>
                                <Col md={4} sm={12}>
                                    <label>Customer Name</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("name", { required: true })}
                                        placeholder="Enter Customer Name"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Father Name</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("name", { required: true })}
                                        placeholder="Enter Customer Father Name"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Mobile No</label>
                                    <input
                                        type="number"
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("mileage", { required: true })}
                                        placeholder="Enter Customer Mobile Number"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Aadhar No</label>
                                    <input
                                        type="number"
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("mileage", { required: true })}
                                        placeholder="Enter Aadhar No"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>PAN No</label>
                                    <input
                                        className="our-form-input"
                                        type="number"
                                        defaultValue=""
                                        {...register("price", { required: true })}
                                        placeholder="Enter PAN Card No"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Date of Birth</label>
                                    <input
                                        className="our-form-input"
                                        type="date"
                                        defaultValue=""
                                        {...register("dob", { required: true })}
                                        placeholder="Car Price"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                
                                
                                <Col md={4} sm={12} className='mt-1'>
                                    <label>Customer Photo</label>
                                    <Button
                                        as={"label"}
                                        htmlFor="upload"
                                        variant="outline-primary"
                                        className="d-block p-2 upload-btn">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />Upload Image
                                    </Button>
                                    <input
                                        className="our-form-input"
                                        type="file"
                                        id="upload"
                                        hidden="hidden"
                                        {...register("img")}
                                        placeholder="Upload Photo"
                                    />
                                </Col>
                                <Col md={4} sm={12} className='mt-1'>
                                    <label>Customer ID Proof</label>
                                    <Button
                                        as={"label"}
                                        htmlFor="upload"
                                        variant="outline-primary"
                                        className="d-block p-2 upload-btn">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />Upload Image
                                    </Button>
                                    <input
                                        className="our-form-input"
                                        type="file"
                                        id="upload"
                                        hidden="hidden"
                                        {...register("img")}
                                        placeholder="Upload Photo"
                                    />
                                </Col>
                                <Col md={4} sm={12} className='mt-1'>
                                    <label>Customer Address Proof</label>
                                    <Button
                                        as={"label"}
                                        htmlFor="upload"
                                        variant="outline-primary"
                                        className="d-block p-2 upload-btn">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />Upload Image
                                    </Button>
                                    <input
                                        className="our-form-input"
                                        type="file"
                                        id="upload"
                                        hidden="hidden"
                                        {...register("img")}
                                        placeholder="Upload Photo"
                                    />
                                </Col>
                            </Row>
                            <Row className='mt-1'>  
                            <Col md={6} sm={12}>
                                    <label>Opening Date</label>
                                    <input
                                        className="our-form-input"
                                        type="date"
                                        defaultValue=""
                                        {...register("price", { required: true })}
                                        placeholder="Car Price"
                                    />
                            </Col>
                            <Col md={6} sm={12}>
                            <label>Customer Full Address</label>
                            <textarea
                                type="textarea"
                                style={{ height: '100px' }}
                                className="our-form-input"
                                defaultValue=""
                                {...register("details", { required: true })}
                                placeholder="Enter Address"
                            />
                            </Col>
                            </Row>
                            <br />
                            {/* <Button type="submit">Send</Button> */}
                        </Col>
                    </Row>
                </div>

                <div className="text-center mt-4">
                    <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                        Submit
                    </Button>
                </div>
                <Toaster />
            </form>
        </div>
    );
};

export default AddCarDetails;