import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProvideRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }
    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default ProvideRouter;

/**
 * -------------------
 * STEPS
 * -------------------
 * 1. check user is logged in or not 
 * 2. if user is logged in , then allow then to visit the route
 * 3. Else redirect the user to the login page
 * 4. set up
 * */ 