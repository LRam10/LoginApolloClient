import React from 'react'
import DashboardLayout from '../components/dashboard/DashboardLayout';

import UserProvider from '../contexts/users';
const Dashboard = () => {
  return (
    <UserProvider>
        <DashboardLayout/>
    </UserProvider>
  )
}

export default Dashboard;
