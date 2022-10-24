import React, { useContext, useState } from 'react';
//importing form and button
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Login = () => {

    // declaring state for error msg (empty string > nothing by default)
    const[error, setError] = useState('');

    //using context
    const {signIn} = useContext(AuthContext);

    // to navigate
    const navigate = useNavigate();

    //getting location
    const location = useLocation();
     const from = location.state?.from?.pathname || '/';

    //implementing sign in
    const onLogIn = event =>{
        event.preventDefault ();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            // cleaning form and error after logging in and navigating to home page
            form.reset();
            setError('');
            //navigating to wanted page after logged in
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    return (
        <Form onSubmit={onLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name= "email" type="email" placeholder="Enter email" required />

        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button className='mb-3' variant="primary" type="submit">
          Login
        </Button> <br />
        {/* error msg */}
        <Form.Text className="text-danger mb-2">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Login;