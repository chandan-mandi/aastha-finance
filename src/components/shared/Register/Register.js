import React from 'react';
import { useForm } from 'react-hook-form';
import car from '../../../assets/images/registerpage car.jpg';
import logo from '../../../assets/images/c2mechanic-logo.png';
import './Register.css';

const Register = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='register-page'>
            <div className="login-section">
                <div className="imgBx">
                    <img src={car} alt="" />
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <img src={logo} alt="" />
                        <h2>Create new Account</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row nameBox">
                                <div className="inputBx col">
                                    <span>First Name</span>
                                    <input type="text" {...register("name")} />
                                </div>
                                <div className="inputBx col">
                                    <span>Last Name</span>
                                    <input type="text" {...register("name")} />
                                </div>
                            </div>
                            <div className="inputBx">
                                <span>Email</span>
                                <input type="text" {...register("email")} />
                            </div>
                            <div className="row nameBox">
                                <div className="inputBx col">
                                    <span>Password</span>
                                    <input type="password" {...register("password")} />
                                </div>
                                <div className="inputBx col">
                                    <span>Confirm Password</span>
                                    <input type="password" {...register("password")} />
                                </div>
                            </div>
                            <div className="inputBx pass-info">
                                <ul>
                                    <li> Contain at least one uppercase letter </li>
                                    <li> Contain at least one special character </li>
                                    <li> Contain at least one number </li>
                                    <li> Passwords are matching </li>
                                </ul>
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="Create account" name="" />
                            </div>
                            <div className="inputBx">
                                <p>Already have an account ? <span style={{ color: 'red', fontWeight: 'bold' }}>Log in</span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;