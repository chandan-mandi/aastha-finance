import './App.css';
import Register from './components/shared/Register/Register';
import Login from './components/shared/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDashboard from './components/MainDashboard/MainDashboard';
import MakeAdmin from './components/UserDashboard/MakeAdmin/MakeAdmin';
import HomeDashboard from './components/UserDashboard/HomeDashboard/HomeDashboard';
import AddAdminForm from './components/UserDashboard/MakeAdmin/AddAdminForm';
import BookingDetails from './components/UserDashboard/BookingDetails/BookingDetails';
import Payment from './components/UserDashboard/Payment/Payment';
import NewOrder from './components/UserDashboard/NewOrder/NewOrder';
import AddStaff from './components/UserDashboard/AddStaff/AddStaff';
import Delivery from './components/UserDashboard/Delivery/Delivery';
import ChangePassword from './components/UserDashboard/ChangePassword/ChangePassword';
import DepositMaster from './components/UserDashboard/DepositMaster/DepositMaster';
import AcStatement from './components/UserDashboard/Payment/AcStatement';

function App() {
  return (
    <div className="">
      {/* <Register /> */}
      {/* <Login /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainDashboard />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route exact path='/dashboard' element={<MainDashboard />}>
          <Route path="/dashboard/home" element={<HomeDashboard />}></Route>
          <Route path="/dashboard/add-admin" element={<MakeAdmin />}></Route>
          <Route path="/dashboard/add-admin/fiil-up-details" element={<AddAdminForm />}></Route>
          <Route path="/dashboard/booking-details" element={<BookingDetails />}></Route>
          <Route path="/dashboard/payment" element={<Payment />}></Route>
          <Route path="/dashboard/payment/ac-statement/:id" element={<AcStatement />}></Route>
          <Route exact path="/dashboard/new-order" element={<NewOrder />}>
          </Route>
          <Route path={`/dashboard/new-order/update/:id`} element={<DepositMaster />}> </Route>
          <Route path="/dashboard/add-staff" element={<AddStaff />}></Route>
          <Route path="/dashboard/delivery" element={<Delivery />}></Route>
          <Route path="/dashboard/change-password" element={<ChangePassword />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
