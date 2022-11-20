import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AcStatement = () => {
    const {id} = useParams();
    const [acStatement, setAcStatement] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8009/api/v1/account/${id}`)
        .then(res => {
            setAcStatement(res.data.data)
        })
    },[])
    console.log('res:', acStatement)
    return (
        <div>
            <h2>Welcome to Account Statement</h2>
            <h2>Account No: <b>{id}</b></h2>
            <p>Principal Amount: {acStatement.principal_amount}</p>
        </div>
    );
};

export default AcStatement;