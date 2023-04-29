import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleChecked = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Container className='w-25 mx-auto mt-5'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder=" Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3"
                    controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleChecked}
                        type="checkbox"
                        label={<>Accept <Link to='/term'>Terms and Condition</Link></>} />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-success">
                    Already have an account <Link to='/login'>Login</Link>

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;