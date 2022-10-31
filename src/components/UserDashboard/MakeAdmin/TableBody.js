import React from 'react';

const TableBody = ({ admin, handleSelectAdmin, handleDelete, selectedAdmin }) => {

    return (
        <tbody>
            <tr>
                {
                    selectedAdmin === admin.id ?
                        <td style={{ color: 'blue' }}>
                            <div className="radio">
                                <label><input type="radio" id={admin.id} onClick={(e) => handleSelectAdmin(e, admin.id)} name="optradio" /></label>
                            </div>
                        </td>
                        :
                        <td >
                            <div className="radio">
                                <label><input type="radio" id={admin.id} onClick={(e) => handleSelectAdmin(e, admin.id)} name="optradio" /></label>
                            </div>
                        </td>
                }
                {
                    selectedAdmin === admin.id ?
                        <td style={{ color: '#7878e1' }}>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.id}</label>
                            </div>
                        </td>
                        :
                        <td>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.id}</label>
                            </div>
                        </td>
                }
                {
                    selectedAdmin === admin.id ?
                        <td style={{ color: '#7878e1' }}>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.name}</label>
                            </div>
                        </td>
                        :
                        <td>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.name}</label>
                            </div>
                        </td>
                }
                {
                    selectedAdmin === admin.id ?
                        <td style={{ color: '#7878e1' }}>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.userName}</label>
                            </div>
                        </td>
                        :
                        <td>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.userName}</label>
                            </div>
                        </td>
                }
                {
                    selectedAdmin === admin.id ?
                        <td style={{ color: '#7878e1' }}>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.password}</label>
                            </div>
                        </td>
                        :
                        <td>
                            <div className="radiotext">
                                <label htmlFor={admin.id}>{admin.password}</label>
                            </div>
                        </td>
                }
                <td style={{ color: "#3ae11b", fontWeight: '600', }} onClick={() => handleDelete(admin.id)}>
                    Edit
                </td>
                <td style={{ color: "#ff0505", fontWeight: '600' }} onClick={() => handleDelete(admin.id)}>
                    Delete
                </td>
            </tr>

        </tbody>
    );
};

export default TableBody;