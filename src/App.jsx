import {Routes, Route} from 'react-router-dom';

/**Import all routes */
import Home from './pages/Home';
import Email from './pages/user-management/Email';
import Register from './pages/user-management/Register';
import Profile from './pages/user-management/Profile';
import Reset from './pages/user-management/Reset';
import Recovery from './pages/user-management/Recovery';
import PageNotFound from './pages/user-management/PageNotFound';
import Navbar from './components/Navbar';
import Dashboard from './pages/inventory-management/dashboard';
import AddItempage from './pages/inventory-management/addinventory';
import AllUser from './pages/user-management/allUser';


import TableReservationHome from './pages/table-res-management/TableReservationHome';


/** Import middleware */
import { AuthorizeUser } from '../middleware/auth';

import HomeMenu from './pages/menu-management/HomeMenu';
import ItemMenu from './pages/menu-management/ItemMenu';
import TableMenu from './pages/menu-management/tableMenu';

function App() {
  return (
    <>

    <main>
    <Navbar/>
      <Routes>
        <Route path="/" element={<AuthorizeUser><Home/></AuthorizeUser>}></Route>
        <Route path="/email" element={<Email/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<AuthorizeUser><Profile/></AuthorizeUser>}></Route>
        <Route path="/reset" element={<AuthorizeUser><Reset/></AuthorizeUser>}></Route>
        <Route path="/recovery" element={<AuthorizeUser><Recovery/></AuthorizeUser>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/alluser" element={<AuthorizeUser><AllUser/></AuthorizeUser>}></Route>

        
        <Route path="/dashboard" element={<AuthorizeUser><Dashboard/></AuthorizeUser>}></Route>
        <Route path="/dashboard/additem" element={<AuthorizeUser><AddItempage/></AuthorizeUser>}></Route>
        

        {/* Table Reservation */}
        <Route path="/reservation" element = {<AuthorizeUser><TableReservationHome/></AuthorizeUser>} ></Route>

        {/* Menu Management */}
        <Route path="/homeMenu" element={<AuthorizeUser><HomeMenu/></AuthorizeUser>}></Route>
        <Route path="/itemMenu" element={<AuthorizeUser><ItemMenu/></AuthorizeUser>}></Route>
        <Route path='/tableMenu' element={<AuthorizeUser><TableMenu/></AuthorizeUser>}></Route>
        

      </Routes>
      
    </main></> 
  );
}

export default App;
