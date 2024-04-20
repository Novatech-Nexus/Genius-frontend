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

import CatMain from './pages/catering-management/CatMain'; 
import CelOccMenu from './pages/catering-management/CelOccMenu';
import KidMenus from './pages/catering-management/kidMenu';
import KidsParty from './pages/catering-management/KidsParty';
import OrderCat from './pages/catering-management/OrderCat ';
import OrderCus from './pages/catering-management/OrderCus';
import OrderDetail from './pages/catering-management/OrderDetails';
import OrderPlace from './pages/catering-management/Orderplace';
import SeacelMenu from './pages/catering-management/SeacelMnu';
import SeationCeleb from './pages/catering-management/SeationCeleb';
import WedsMenu from './pages/catering-management/WedsMenu';
import Weddings from './pages/catering-management/Weedings';
import UpdateCat from './pages/catering-management/UpdateCat';
import CelebOcc from './pages/catering-management/CellbOcc';

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


        {/* Catering Management */}
        <Route path="/catMain" element={<CatMain/>}></Route>
        <Route path="/ordercat" element={<OrderCat/>}></Route>
        <Route path="/ordercus" element={<OrderCus/>}></Route>
        <Route path="/orderplace" element={<OrderPlace/>}></Route>
        <Route path="/celOccMenu" element={<CelOccMenu/>}></Route>
        <Route path="/kidMenus" element={<KidMenus/>}></Route>
        <Route path="/orderDetail" element={<OrderDetail/>}></Route>
        <Route path="/seacelMenu" element={<SeacelMenu/>}></Route>
        <Route path="/kidsParty" element={<KidsParty/>}></Route>
        <Route path="/seationCeleb" element={<SeationCeleb/>}></Route>
        <Route path="/wedsMenu" element={<WedsMenu/>}></Route>
        <Route path="/weddings" element={<Weddings/>}></Route>
        <Route path="/updateCat" element={<UpdateCat/>}></Route>
        <Route path="/celebOcc" element={<CelebOcc/>}></Route>
  </Routes>
      
    </main></> 
  );
}

export default App;
