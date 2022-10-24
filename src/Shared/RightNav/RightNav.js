import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
//importing buttons from react bs
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

//importing icon from react icons
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch} from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import CarouselBrand from '../Carousel/Carousel';


const RightNav = () => {

 // getting login info using context
 const {providerLogin}   = useContext(AuthContext);

 //creating google auth provider (must add new)
 const googleProvider = new GoogleAuthProvider()

// function 
const onGoogleSignIn = () =>{
providerLogin(googleProvider)
.then(result => {
    const user = result.user;
    console.log(user);
})
.catch(error => console.error(error));
}

    return (
        <div>
<ButtonGroup vertical>
      <Button onClick={onGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with google</Button>
      <Button variant="outline-dark"> <FaGithub></FaGithub> Login with github</Button>
</ButtonGroup>
<h5 className='mt-4'>Find Us on</h5>
<ListGroup>
      <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Whatsapp </ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch> Twitch </ListGroup.Item>
      <ListGroup.Item  className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
<div>
<CarouselBrand></CarouselBrand>
</div>
        </div>
    );
};

export default RightNav;