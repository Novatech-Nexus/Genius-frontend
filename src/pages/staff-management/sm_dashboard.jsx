import React from 'react';
import Header from '../../components/inventory/header';
import Sidebar from '../../components/staff-manager/Sidebar';
import Employeecard from '../../components/staff-manager/Employeecard';





function sm_dashboard () {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Employeecard/>
     
    
      
    </div>
  );
}

export default sm_dashboard;
