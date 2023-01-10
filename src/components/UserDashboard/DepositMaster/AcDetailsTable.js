import React from 'react';

const AcDetailsTable = ({ac}) => {
    return (
        <tbody>
            <tr style={{ textAlign: 'center' }}>
                <td>{ac?._id}</td>
            </tr>
        </tbody>
    );
};

export default AcDetailsTable;