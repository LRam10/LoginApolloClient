import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/Navbar';

const MainLayout = () => {
  return (
    <>
        <Outlet />
    </>
  )
}

export default MainLayout;