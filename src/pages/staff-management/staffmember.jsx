import React from 'react'
import Header from '../../components/inventory/header';
import Sidebar1 from '../../components/staff-manager/Sidebar1';
import Staffmemberimg from '../../components/staff-manager/staffmemberimg';


function staffmember() {
  return (
    <div>
      <Header/>
      <Sidebar1/>
      <Staffmemberimg/>
    </div>
  )
}

export default staffmember;
