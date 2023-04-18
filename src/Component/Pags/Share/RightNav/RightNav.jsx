import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../QZone/Qzone';
import bg from '../../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div>
                <h4 className='mt-5'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='text-center'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;