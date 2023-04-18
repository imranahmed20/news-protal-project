import React from 'react';
import Header from '../Pags/Share/Header/Header';
import Footer from '../Pags/Share/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../Pags/Share/LeftSide/LeftSide';
import RightNav from '../Pags/Share/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg={6}>
                        <h1>Main container</h1>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;