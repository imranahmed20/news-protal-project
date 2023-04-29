import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Provider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='container'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear ot Favour</small></p>
                <p>{moment().format("dddd, MMMM. Do YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={80}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </div>
    );
};

export default Header;