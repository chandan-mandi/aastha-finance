import React from 'react';
import { Row } from 'react-bootstrap';
import AddCarDetails from './AddCarDetails';
import BookingDetailsCard from './BookingDetailsCard';

const BookingDetails = () => {
    return (
        <div className='add-padding'>
            <Row >
            {/* Customer Details Card  */}
            {/* <BookingDetailsCard /> */}
            </Row>
            <AddCarDetails />
        </div>
    );
};

export default BookingDetails;