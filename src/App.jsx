import {Routes, Route} from 'react-router-dom';

/**Import all routes */
import Home from './pages/Home';
import Username from './pages/user-management/Username';
import Register from './pages/user-management/Register';
import Profile from './pages/user-management/Profile';
import Password from './pages/user-management/Password';
import Reset from './pages/user-management/Reset';
import Recovery from './pages/user-management/Recovery';
import PageNotFound from './pages/user-management/PageNotFound';
import Navbar from './components/Navbar';
import Dashboard from './pages/inventory-management/dashboard';
import AddItempage from './pages/inventory-management/addinventory';
import TableReservationHome from './pages/table-res-management/TableReservationHome';
import Sm_dashboard from './pages/staff-management/sm_dashboard';
import Addemployee from './pages/staff-management/addemployee';
import Staffdetails from './pages/staff-management/staffdetails';
import Salaryassign from './pages/staff-management/salaryassign';

import Staffmember from './pages/staff-management/staffmember';
//import Attendance from './pages/staff-management/attendance';







function App() {
  return (
    <>

    <main>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/username" element={<Username/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/password" element={<Password/>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
        <Route path="/recovery" element={<Recovery/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>


        
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/additem" element={<AddItempage/>}></Route>
        

        {/* Table Reservation */}
        <Route path="/reservation" element = {<TableReservationHome/>} ></Route>

        {/* staff management */}
        <Route path="/sm_dashboard" element={<Sm_dashboard/>}></Route>
        <Route path="/addemployee" element={<Addemployee/>}></Route> 
        {/* <Route path="/editemployee/:id" element={<Editemployee/>}></Route> */}
        <Route path="/staffdetails" element={<Staffdetails/>}></Route>
        <Route path="/salaryassign" element={<Salaryassign/>}></Route>
        <Route path="/staffmember" element={<Staffmember/>}></Route>
        
        {/* <Route path="/attendence" element={<Attendance/>}></Route> */}
        
        

       
        
        
       

      </Routes>
      
    </main></> 
  );
}

export default App;
