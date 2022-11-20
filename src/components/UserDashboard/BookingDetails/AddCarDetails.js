import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker';



const AddCarDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const [photo, setPhoto] = useState("");
    const [idProof, setIdProof] = useState("");
    const [addressProof, setAddressProof] = useState("");
    const [dob, setDOB] = useState();
    const [openingDate, setOpeningDate] = useState(new Date());

    const uploadFile = async (e, type) => {

        const loading = toast.loading('Uploading...Please wait!')
        console.log(e.target.files[0])
        console.log('type', type)
        if (!e.target.files[0]) {
            return toast.error('Please upload an image!');
        }
        let imageURL = "";
        console.log(e.target.files[0])
        if (e.target.files[0]) {
            const imageData = new FormData();
            imageData.set('key', 'acb2d4c7a68ef1bf06d396d73adb600a')
            imageData.append('image', e.target.files[0]);
            try {
                const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
                console.log(res)
                imageURL = res.data.data.display_url;
                toast.success('Uploaded!', {
                    id: loading,
                });
                // return imageURL;
            } catch (error) {
                toast.dismiss(loading);
                return toast.error('Failed to upload the image!');
            }
        }
        // setPhoto(imageURL);
        if(type == "photo"){
            setPhoto(imageURL)
        }
        if(type == "idProof"){
            setIdProof(imageURL)
        }
        if(type == "addressProof"){
            setAddressProof(imageURL)
        }
    }
    const onSubmit = async (data) => {
        if(!photo){
            return toast.error(`Please upload your Photo!`);
        }
        if(!idProof){
            return toast.error(`Please upload your id Proof!`);
        }
        if(!addressProof){
            return toast.error(`Please upload your Address Proof!`);
        }
        if(!dob){
            return toast.error(`Please enter your Date of Birth!`);
        }
        if(!openingDate){
            return toast.error(`Please enter your Opening Date!`);
        }


        let dob_day = dob.getDate();
        let dob_month = dob.getMonth() + 1;
        let dob_year = dob.getFullYear();
        const dob_date = (`${dob_day}-${dob_month}-${dob_year}`);

        let opening_day = openingDate.getDate();
        let opening_month = openingDate.getMonth() + 1;
        let opening_year = openingDate.getFullYear();
        const opening_date = (`${opening_day}-${opening_month}-${opening_year}`);
        
        const customerInfo = {
            name: data.name,
            father_name: data.father_name,
            mobile_no: data.mobile_no,
            aadhar_no: data.aadhar_no,
            pan_no: data.pan_no,
            dob: dob_date,
            photo: photo,
            id_proof: idProof,
            address_proof: addressProof,
            opening_date: opening_date,
            full_address: data.full_address
        };
        const loading = toast.loading('Uploading...Please wait!');
        axios.post('http://localhost:8009/api/v1/user', customerInfo)
            .then(res => {
                if (res.data.status == "success") {
                    console.log(res.data)
                    toast.success('Added', {
                        id: loading,
                    });
                    console.log("sucesssful")
                    reset();
                    //  swal("Successfully Added!", "Your car has been successfully added.", "success");
                    swal({
                        title: "Successfully Added!",
                        text: "Your customer has been successfully added.",
                        icon: "success",
                        button: "OK!",
                      })
                      .then((value) => {
                          window.location.reload();
                      })
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
                                        {...register("father_name", { required: true })}
                                        placeholder="Enter Customer Father Name"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Mobile No</label>
                                    <input
                                        type="number"
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("mobile_no", { required: true })}
                                        placeholder="Enter Customer Mobile Number"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Aadhar No</label>
                                    <input
                                        type="number"
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("aadhar_no", { required: true })}
                                        placeholder="Enter Aadhar No"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>PAN No</label>
                                    <input
                                        className="our-form-input"
                                        type="text"
                                        defaultValue=""
                                        {...register("pan_no", { required: true })}
                                        placeholder="Enter PAN Card No"
                                    />
                                </Col>
                                <Col md={4} sm={12}>
                                    <label>Date of Birth</label>
                                    <DatePicker className="our-form-input" onChange={setDOB} value={dob} />
                                    
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
                                        // {...register("img")}
                                        onChange={(e) => {uploadFile(e, "photo")}}
                                        placeholder="Upload Photo"
                                    />
                                    {photo &&
                                        <div className='m-2'>
                                            <img src={photo} alt="" width={100} height={100} />
                                        </div>
                                    }
                                </Col>
                                <Col md={4} sm={12} className='mt-1'>
                                    <label>Customer ID Proof</label>
                                    <Button
                                        as={"label"}
                                        htmlFor="id-proof"
                                        variant="outline-primary"
                                        className="d-block p-2 upload-btn">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />Upload Image
                                    </Button>
                                    <input
                                        className="our-form-input"
                                        type="file"
                                        id="id-proof"
                                        hidden="hidden"
                                        // {...register("id_proof")}
                                        onChange={(e) => {uploadFile(e, "idProof")}}
                                        placeholder="Upload Photo"
                                    />
                                    {idProof &&
                                        <div className='m-2'>
                                            <img src={idProof} alt="" width={100} height={100} />
                                        </div>
                                    }
                                </Col>
                                <Col md={4} sm={12} className='mt-1'>
                                    <label>Customer Address Proof</label>
                                    <Button
                                        as={"label"}
                                        htmlFor="address-proof"
                                        variant="outline-primary"
                                        className="d-block p-2 upload-btn">
                                        <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />Upload Image
                                    </Button>
                                    <input
                                        className="our-form-input"
                                        type="file"
                                        id="address-proof"
                                        hidden="hidden"
                                        // {...register("id_proof")}
                                        onChange={(e) => {uploadFile(e, "addressProof")}}
                                        placeholder="Upload Photo"
                                    />
                                    {addressProof &&
                                        <div className='m-2'>
                                            <img src={addressProof} alt="" width={100} height={100} />
                                        </div>
                                    }
                                </Col>
                            </Row>
                            <Row className='mt-1'>
                                <Col md={4} sm={12}>
                                    <label>Opening Date</label>
                                    <DatePicker className="our-form-input" onChange={setOpeningDate} value={openingDate} />
                                </Col>
                                <Col md={8} sm={12}>
                                    <label>Customer Full Address</label>
                                    <textarea
                                        type="textarea"
                                        style={{ height: '100px' }}
                                        className="our-form-input"
                                        defaultValue=""
                                        {...register("full_address", { required: true })}
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