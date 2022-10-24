import React, { useContext, useState } from 'react';
//importing form and button
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Register = () => {

// declaring state for error msg (empty string > nothing by default)
    const[error, setError] = useState('');
    //declaring state for terms check box
    const [accepted, setAccepted] = useState(false);

    // using context
    const {createUser, updateUserProfile} = useContext(AuthContext);

        // register button implement onSubmit
        const onRegister = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photoURL = form.photoURL.value;
            const email = form.email.value;
            const password = form.password.value;
            // console.log(name,email,password,photoURL)

         // creating user
         createUser(email,password)  
         .then (result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            onUpdateUserProfile(name, photoURL);
         }) 
         .catch(error => {
            console.error(error)
            setError(error.message)
        })
        }

        //event handler to update users information
        const onUpdateUserProfile = (name, photoURL) =>{
            const profile= {
                 displayName: name,
           photoURL: photoURL,
            }
           updateUserProfile(profile)
           .then (() => {})
           .catch(error => console.error(error))
        }

        //terms event handler
        const onAccept = event => {
setAccepted(event.target.checked)
        }

    return (


        <Form onSubmit={onRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Your Name" />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
           type="checkbox" 
           onClick={onAccept}
           label={<>Accept <Link to='/terms'>Terms and Conditions</Link> </>}/>
        </Form.Group>
        
        <Button className='mb-3' variant="primary" type="submit" disabled={!accepted}>  
        {/* disabled button if  unchecked */}
          Register
        </Button> <br />
        {/* error msg */}
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Register;