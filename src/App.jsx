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

import TableReservationHome from './pages/table-res-management/TableReservationHome';

import Navbar_new from '../src/components/navbar_new';

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
    <Navbar_new/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/email" element={<Email/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<AuthorizeUser><Profile/></AuthorizeUser>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
        <Route path="/recovery" element={<Recovery/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>


        
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/additem" element={<AddItempage/>}></Route>
        

        {/* Table Reservation */}
        <Route path="/reservation" element = {<TableReservationHome/>} ></Route>

        {/* Menu Management */}
        <Route path="/homeMenu" element={<HomeMenu/>}></Route>
        <Route path="/itemMenu" element={<ItemMenu/>}></Route>
        <Route path='/tableMenu' element={<TableMenu/>}></Route>
        

      </Routes>
      
    </main></> 
  );
}

export default App;
