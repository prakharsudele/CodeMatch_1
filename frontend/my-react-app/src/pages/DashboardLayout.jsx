// src/layouts/DashboardLayout.jsx
import React from 'react';
import DashboardNavbar from '../pages/DashboardNavbar'; // new navbar

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
