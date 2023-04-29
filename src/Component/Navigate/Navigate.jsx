import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const Navigate = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar bg="light" expand="lg" variant='light'>
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/category/0">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex gap-3">
                            {user && <Nav.Link href="#action2"><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>{user.displayName}</Nav.Link>}

                            {user ?
                                <Button onClick={handleLogOut} variant="success">logOut</Button> :
                                <Link to='/login'><Button variant="success">Login</Button></Link>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Navigate;