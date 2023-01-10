import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/images/aashtha_finance-logo.png';
import ProfilePopper from '../../components/ProfilePopper/ProfilePopper';
import './MainDashboard.css';

const MainDashboard = () => {
    // const { admin } = useAuth();
    const admin = true
    const [isActive, setActive] = useState(false);
    const { pathname } = useLocation();
    const lastSegment = pathname.split("/").pop();
    console.log("last segment:- ",lastSegment)
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className="main-dashboard">
            <div className="dash-container">
                <div className={isActive ? "navigation active" : "navigation"}>
                    <ul>
                        <li className='logo-div'>
                            <Link to="/">
                                <img src={logo} alt="" className={isActive ? 'img-100' : 'img-50'} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/home">
                                <span className="icon">
                                    <div className="notify-box">
                                    <div>
                                    <i class="fa-solid fa-house-chimney"></i>
                                    </div>
                                    </div>
                                </span>
                                <span className="title">Home</span>
                            </Link>
                        </li>
                        {admin && <>
                            <li>
                                <Link to={`/dashboard/booking-details`}>
                                    <span className="icon">
                                        <div className="notify-box">
                                        <i class="fa-solid fa-user-plus"></i>
                                        </div>
                                    </span>
                                    <span className="title">Create Customer</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/new-order`}>
                                    <span className="icon">
                                        <div className="notify-box">
                                            {/* <i class="fa-solid fa-bag-shopping faIcon"></i> */}
                                            <i class="fa-solid fa-person-circle-check"></i>
                                        </div>
                                    </span>
                                    <span className="title">Deposit Master</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/payment`}>
                                    <span className="icon">
                                        <div className="notify-box">
                                        <i class="fa-solid fa-wallet"></i>
                                        </div>
                                    </span>
                                    <span className="title">Cash Collection</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to={`/dashboard/payment`}>
                                    <span className="icon">
                                    <div className="notify-box">
                                    <i class="fa-solid fa-briefcase"></i>
                                        </div>
                                    </span>
                                    <span className="title">Expence Master</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/payment`}>
                                    <span className="icon">
                                    <div className="notify-box">
                                    <i class="fa-solid fa-envelope-open-text"></i>
                                        </div>
                                    </span>
                                    <span className="title">Change Password</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/payment`}>
                                    <span className="icon">
                                        <div className="notify-box">
                                        <i class="fa-solid fa-wallet"></i>
                                        </div>
                                    </span>
                                    <span className="title">Payment</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/delivery`}>
                                    <span className="icon">
                                        <div className="notify-box">
                                        <i class="fa-solid fa-truck-fast"></i>
                                        </div>
                                    </span>
                                    <span className="title">Delivery</span>
                                </Link>
                            </li> */}
                        </>}
                        {admin && <>
                            {/* <li>
                                <Link to={`/dashboard/add-staff`}>
                                    <span className="icon">
                                        <div className="notify-box">
                                        <i class="fa-regular fa-user"></i>
                                        </div>
                                    </span>
                                    <span className="title">Add Staff</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/addBlog`}>
                                    <span className="icon">
                                    <div className="notify-box">
                                    <i class="fa-solid fa-screwdriver-wrench"></i>
                                        </div>
                                    </span>
                                    <span className="title">Add Workshop</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/add-admin`}>
                                    <span className="icon">
                                    <div className="notify-box">
                                    <i class="fa-solid fa-crown"></i>
                                        </div>
                                    </span>
                                    <span className="title">Add Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/dashboard/manageAllBooking`}>
                                    <span className="icon">
                                    <div className="notify-box">
                                    <i class="fa-solid fa-headset"></i>
                                        </div>
                                    </span>
                                    <span className="title">Customer Support</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to={`/dashboard/change-password`}>
                                    <span className="icon">
                                    <div className="notify-box">
                                    <i class="fa-solid fa-lock"></i>
                                        </div>
                                    </span>
                                    <span className="title">Change Password</span>
                                </Link>
                            </li>
                        </>}
                        <li>
                            <Link to="/dashboard/change-password">
                                <span className="icon">
                                <div className="notify-box">
                                <i class="fa-regular fa-circle-user"></i>
                                        </div>
                                </span>
                                <span className="title">Change Profile Picture</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="icon">
                                <div className="notify-box">
                                <i class="fa-solid fa-gear"></i>
                                        </div>
                                </span>
                                <span className="title">My setting</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="icon">
                                <div className="notify-box">
                                <i class="fa-solid fa-right-from-bracket"></i>
                                        </div>
                                </span>
                                <span className="title">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* main part  */}
                <div className={isActive ? "main active" : "main"}>
                    {lastSegment !== 'change-password' && 
                    <div className="topbar">
                        <div className="d-flex align-items-center">
                            <div className="toggle" onClick={handleToggle}>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            <div className="search">
                                <label>
                                    <input type="text" />
                                    <i class="fa-solid fa-magnifying-glass faIcon"></i>
                                </label>
                            </div>
                        </div>
                        <div className="user-details">
                            <div className="icon-box d-flex">
                            <div className="notify-box">
                            <i class="fa-solid fa-moon"></i>
                            </div>
                            <div className="notify-box">
                                <i class="fa-solid fa-bell"></i>
                            </div>
                            <div className="notify-box">
                            <i class="fa-solid fa-gear"></i>
                            </div>
                            </div>
                            <div className="user-card">
                                <div className="user">
                                    <ProfilePopper />
                                </div>
                                <h6>Miraz</h6>
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    }
                    <Outlet />



                    {/* ADD CHARTS  */}
                    {/* <div className="graphBox">
                        <div className="chartBox">
                            <BookingPieChart />
                        </div>
                        <div className="chartBox">
                            <MonthlyBarChart />
                        </div>
                    </div> */}
                    {/* DETAILS  */}
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;