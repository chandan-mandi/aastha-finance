import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Loader from '../../Loader/Loader';

const NewOrderTableBody = ({ order }) => {
    const navigate = useNavigate();

    const updateHandler = (userId) => {
        if (userId.id === 3445) {
            return swal("Permission restriction!", "As a test-admin, you don't have permission to delete 6 core services. But you can delete your added services.", "info");
        }
        const uri = `update/${userId._id}`;
        navigate(uri, { state: { userId } });
    }
    // const [account, setAc] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     if (order.account_no) {
    //         order.account_no.map(ac => {
    //             fetch(`https://micro-finserv-sever-chandan-mandi.vercel.app/api/v1/account/${ac}`)
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     setAc(oldArray => [...oldArray,data.data])
    //                     setLoading(false)
    //                 })
    //         })
    //         }
    //         setLoading(false)
    // }, [])
    return (
        <tbody>
            <tr onClick={() => updateHandler(order)}>
                <td style={{ textAlign: 'center' }}>#{order._id}</td>
                <td>{order.name}</td>
                <td>{order.mobile_no}</td>
                <td>{order.full_address.slice(0, 12)}</td>
                <td>{order.father_name}</td>
                {/* if you show Account Details  */}
                {/* <td>
                    {loading ? <Loader /> :
                    account.length == 0 ? "Ac not created!" :
                    account.map(ac => (
                        ac == null ? "Ac Not Found!" : ac.principal_amount+" & "
                    ))
                    }
                </td> */}
                <td>
                    {order.opening_date.slice(0, 10)}
                </td>
            </tr>
        </tbody>
    );
};

export default NewOrderTableBody;