import React from 'react';
import Navigate from '../../Navigate/Navigate';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navigate></Navigate>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;