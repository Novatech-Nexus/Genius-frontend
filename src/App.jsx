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
import Contact from './pages/customer-care-management/Contact';
import Feedback from './pages/customer-care-management/Feedback';
import Feedback_form from './pages/customer-care-management/Feedback_form';
import Feedback_history from './pages/customer-care-management/Feedback_history';
import Feedback_approval from './pages/customer-care-management/Feedback_approval';
import Customer_care_manager from './pages/customer-care-management/Customer_care_manager';
import Feedback_of_services from './pages/customer-care-management/Feedback_of_services';
import FeedbackDataAnalysis from './pages/customer-care-management/FeedbackDataAnalysis';


/** Import middleware */
import { AuthorizeUser } from '../middleware/auth';

import HomeMenu from './pages/menu-management/HomeMenu';
import ItemMenu from './pages/menu-management/ItemMenu';
import TableMenu from './pages/menu-management/tableMenu';

// import navbars 



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

import Cart from './components/order/cart.jsx';
import CreatePost from './components/order/CreatePost.jsx';
import Posts from './pages/order-management/Post.jsx';
import DummyPaymentGateway from './components/order/Payment.jsx';
//import OrderReport from './components/order/'
import OrderHome from './pages/order-management/OrderHome.jsx';
import Sm_dashboard from './pages/staff-management/sm_dashboard';
import Addemployee from './pages/staff-management/addemployee';
import Staffdetails from './pages/staff-management/staffdetails';
import Salaryassign from './pages/staff-management/salaryassign';
import SalaryDetails from './pages/staff-management/salarydetails.jsx';
import Staffmember from './pages/staff-management/staffmember';
import AttendanceQRCode from './pages/staff-management/attendance'; 







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
        <Route path="/alluser" element={<AllUser/>}></Route>

        
        <Route path="/dashboard" element={<AuthorizeUser><Dashboard/></AuthorizeUser>}></Route>
        <Route path="/dashboard/additem" element={<AuthorizeUser><AddItempage/></AuthorizeUser>}></Route>
        

        {/* Table Reservation */}
        <Route path="/reservation" element = {<AuthorizeUser><TableReservationHome/></AuthorizeUser>} ></Route>

        {/* staff management */}
        <Route path="/sm_dashboard" element={<Sm_dashboard/>}></Route>
        <Route path="/addemployee" element={<Addemployee/>}></Route> 
        {/* <Route path="/editemployee/:id" element={<Editemployee/>}></Route> */}
        <Route path="/staffdetails" element={<Staffdetails/>}></Route>
        <Route path="/salaryassign" element={<Salaryassign/>}></Route>
        <Route path="/salarydetails" element={<SalaryDetails/>}></Route>
        <Route path="/staffmember" element={<Staffmember/>}></Route>
        <Route path="/attendance" element={<AttendanceQRCode />} />
       
        
        

       
        
        
       

      </Routes>
      
    </main></> 
  );
}

export default App;
