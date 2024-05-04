import React from 'react';
import Header from '../../components/inventory/header';
import Sidebar from '../../components/staff-manager/Sidebar';
import Employeecard from '../../components/staff-manager/Employeecard';
import Staffmemberimg from '../../components/staff-manager/staffmemberimg';





function sm_dashboard () {
  return (
    <div>
      
      <Sidebar/>
      <Staffmemberimg/>
     
    
      
    </div>
  );
}

export default sm_dashboard;
