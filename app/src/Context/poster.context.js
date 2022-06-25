import React, { useState, createContext } from 'react';

// axios api
import api from '../api/poster';

export const UserPoster = createContext();

export const UserPosterProvider = ({ children }) => {

    const [userData, setUserData] = useState();

    const viewUserData = (id) => {
        console.log(id);
        api.get('/get-user', { id })
        .then( res => console.log(res) )
        .catch( err => console.log(err) )
    }

    return (
        <UserPoster.Provider value={{ userData, viewUserData }}>
            { children }
        </UserPoster.Provider>
    )
}
