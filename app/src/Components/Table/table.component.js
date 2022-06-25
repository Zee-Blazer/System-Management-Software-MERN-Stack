import React, { useState, useEffect, useContext } from 'react';

// Axios Api
import api from '../../api/poster';

// Navigation 
import { useNavigate } from 'react-router-dom';

// Context 
import { UserPoster } from '../../Context/poster.context';

// CSS
import './table.component.css';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

export const TableComponent = () => {

    //
    const navigate = useNavigate();

    const { viewUserData } = useContext(UserPoster);

    const [data, setData] = useState();

    useEffect( () => {
        api.get('/')
        .then( res => setData(res.data) )
        .catch( err => console.log(err) )
    }, [] )

    const viewUser = (id) => {
        viewUserData(id);
    }

    const deleteUser = (id) => {
        console.log(id);
        api.delete('delete-user', { id })
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    }

    return (
        <div>
            
            <table id="customers">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>E-mail</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                {
                    data && data.map( (item, id) => (
                        <tr>
                            <td>{ id+1 }</td>
                            <td>{ item.name }</td>
                            <td>{ item.mobile }</td>
                            <td>{ item.email }</td>
                            <td>{ item.address }</td>
                            <td>
                                <div className='icons'>
                                    <FontAwesomeIcon 
                                        icon={faPencil} 
                                        className="icon pencil" 
                                    />
                                    <FontAwesomeIcon 
                                        icon={faTrash} 
                                        className="icon trash" 
                                        onClick={ () => deleteUser(item._id) }
                                    />
                                    <FontAwesomeIcon 
                                        icon={faEye} 
                                        className="icon eye" 
                                        onClick={ () => viewUser(item._id) }
                                    />
                                </div>
                            </td>
                        </tr>
                    ) )
                }
                <tr></tr>
            </table>

        </div>
    )
}
