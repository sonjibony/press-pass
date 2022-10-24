import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    //using context to share data
    const {user,loading} = useContext(AuthContext);

    // knowing location to redirect user
    const location = useLocation();

    //showing spinner
    if(loading){
     return  <Spinner animation="grow" variant="success" />
    }

    //if user is logged in show what needs to be seen or send to log in
    if(!user){
       return <Navigate to= '/login'
        state={{from: location}}
        replace
       > </Navigate>
    }
    return children;
   
};

export default PrivateRoute;