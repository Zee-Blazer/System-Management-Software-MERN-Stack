import React, { useState, useEffect } from 'react';

// Axios Api
import api from '../../api/poster';

// Navigation
import { useNavigate } from 'react-router-dom';

// CSS
import './adder.component.css';

export const AdderComponent = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");

    const doSubmit = (e) => {
        e.preventDefault();
        api.post('/poster', { name, mobile, email, address })
        .then( res => console.log(res) )
        .catch( err => console.log(err) )
        navigate('/'); 
    }

    return(
        <div className="main__container add__container">
            <h2>Add A User To The System</h2>

            <form onSubmit={ doSubmit }>
                <div>
                    <input 
                        type="text" 
                        placeholder='Name (eg James)' 
                        className='input__adder' 
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                         placeholder='Mobile (eg 0916273382)' 
                         className='input__adder' 
                         value={mobile}
                         onChange={ (e) => setMobile(e.target.value) }
                        />
                </div>

                <div>
                    <input 
                        type="text" 
                        placeholder='E-mail (eg jamesboss@gmail.com)' 
                        className='input__adder' 
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        placeholder='Address (eg Villa Estate)' 
                        className='input__adder' 
                        value={address}
                        onChange={ (e) => setAddress(e.target.value) }
                    />
                </div>


                <button 
                    className='adder__btn'
                    onClick={ doSubmit }
                >Add User</button>
                
            </form>

            <p style={{ textAlign: 'center' }}>You can a preferred user of your choice</p>
        </div>
    )
}
