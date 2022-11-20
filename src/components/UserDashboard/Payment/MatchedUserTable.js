import React from 'react';

const MatchedUserTable = ({user, accountSelectHanlder, handleClose}) => {
    
    return (
        <tbody>
            <tr style={{ textAlign: 'center' }} onClick={() => {accountSelectHanlder(user); handleClose()}}>
                <td>{user.name}</td>
                <td>{user.account_no ? user.account_no : "Account not created"}</td>
            </tr>
        </tbody>
    );
};

export default MatchedUserTable;