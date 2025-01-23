import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './globalComonents/Navbar/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Layout;