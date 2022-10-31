import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ChangePassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const handleTogglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown)
        console.log('hit click')
    }
    return (
        <div className="change-password-section">
            <div className="topbar">
                <div className="d-flex align-items-center">
                    <div className="toggle" >
                        <i class="fa-solid fa-angle-left bg-white circle-icon shadow"></i>
                    </div>
                    <div className="path-text">
                        <h6 style={{ margin: "0 0 0 30px" }}>Change Password</h6>
                    </div>
                </div>
            </div>
            <div className="change-password-content add-padding">
                <p>Strong password required. Enter 8-25 characters. Do not include common words or names.
                    <br />
                    Combine uppercase letters, numbers and symbols.
                </p>
                <div className="password-change-form" style={{ marginTop: '5rem' }}>
                    <form>
                        <div class="form-group row mb-2">
                            <label for="email" class="col-sm-3 col-form-label">Old Password</label>
                            <div class="col-sm-4 inner-addon right-addon">
                                <span onClick={handleTogglePassword}>
                                    <i class="fa-regular fa-eye-slash eyeicon"
                                        type="button" ></i>
                                </span>
                                <input type={passwordShown ? 'text' : 'password'} class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group row mb-2 ">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Create New Password</label>
                            <div class="col-sm-4 inner-addon right-addon">
                                <span onClick={handleTogglePassword}>
                                    <i class="fa-regular fa-eye-slash eyeicon"
                                        type="button" ></i>
                                </span>
                                <input type={passwordShown ? 'text' : 'password'} class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-3 col-form-label">Confirm New Password</label>
                            <div class="col-sm-4 inner-addon right-addon">
                                <span onClick={handleTogglePassword}>
                                    <i class="fa-regular fa-eye-slash eyeicon"
                                        type="button" ></i>
                                </span>
                                <input type={passwordShown ? 'text' : 'password'} class="form-control" id="inputPassword" placeholder="Password" />
                                <div className="submitting-btn">
                                    <Button variant='outline-primary' className="px-5">Update</Button>
                                    <Button variant='primary' style={{ backgroundColor: "#6658DD" }} className='px-5 ms-2'>Submit</Button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ChangePassword;