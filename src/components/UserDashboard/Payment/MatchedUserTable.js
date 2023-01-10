import React from 'react';

const MatchedUserTable = ({user, accountSelectHanlder, handleClose}) => {
    console.log('user ac', user)
    return (
        <tbody>
            {user.account_no ? user.account_no.map(ac => (
            <tr style={{ textAlign: 'center' }} onClick={() => {accountSelectHanlder(user, ac); handleClose()}}>
                <td>{user.name}</td>
                {/* <td>{user.account_no ? user.account_no : "Account not created"}</td> */}
                
                    <td>{ac}</td>
            </tr>
                )): 
                <tr style={{ textAlign: 'center' }}>
                    <td>{user.name}</td>
                    <td>Please create Loan Account!</td>
                </tr>
                }
        </tbody>
    );
};

export default MatchedUserTable;