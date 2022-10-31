import React from 'react';
import { useForm } from 'react-hook-form';
import car from '../../../assets/images/registerpage car.jpg';
import logo from '../../../assets/images/c2mechanic-logo.png';
import '../Register/Register.css';
import { Row } from 'react-bootstrap';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='login-page'>
            <div className="login-section">
                <div className="imgBx">
                    <img src={car} alt="" />
                </div>
                <div className="contentBx">
                    <div className="formBx">
                        <img src={logo} alt="" />
                        <h2>Login to your Account</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="inputBx">
                                <span>Email</span>
                                <input placeholder='username@gmail.com' type="text" {...register("email")} />
                            </div>
                            <div className="inputBx">
                                <span>Password</span>
                                <input placeholder='Password' type="password" {...register("password")} />
                            </div>
                            <Row>
                            <div className="remember col">
                                <label><input  type="checkbox" /> Remember me</label>
                                
                            </div>
                            <div className="col text-right" style={{textAlign: 'right'}}>
                                <span style={{color: 'red'}}>Forgot Password?</span>
                            </div>
                            </Row>
                            <div className="inputBx">
                                <input type="submit" value="Login" name="" />
                            </div>
                            <br />
                            <div className="inputBx">
                                <p>Don't have any account yet? <span style={{color: 'red'}}>Register now </span></p>
                            </div>
                            {/* other login btn  */}
                            {/* <Container>
                            <Row>
                                <Col md={6}>
                                <Button variant="secondary" className="text-center login-btn">
                                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />
                                    Google
                                </Button>
                                </Col>
                                
                                <Col md={6}>
                                <Button variant="secondary" className="text-center login-btn">
                                <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504903.png?token=exp=1647612090~hmac=d87a011df9d0f5038175c3df11df320d" alt="" />
                                   <span className='mr-3'>Facebook</span></Button>
                                </Col>
                            </Row>
                            </Container> */}
                                
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;