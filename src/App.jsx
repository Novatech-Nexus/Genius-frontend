import {Routes, Route} from 'react-router-dom';

/**Import all routes */

//User management system
import Home from './pages/Home';
import Homepage from './pages/user-management/Homepage.jsx'
import Email from './pages/user-management/Email';
import Register from './pages/user-management/Register';
import Profile from './pages/user-management/Profile';
import Reset from './pages/user-management/Reset';
import RecoveryEmail from './pages/user-management/RecoveryEmail';
import PageNotFound from './pages/user-management/PageNotFound';
import NewPassword from './pages/user-management/NewPassword.jsx';
import Navbar from './components/Navbar';

import EmployeeLogin from './pages/Employee-login/EmployeeLogin.jsx';
import EmployeeDashboard from './pages/Employee-login/EmployeeDashboard.jsx';
import AllUser from './pages/user-management/allUser';

// inventory---------------------------------------------------
import Dashboard from './pages/inventory-management/dashboard';
import AddItempage from './pages/inventory-management/addinventory';
import AllitemPage from './pages/inventory-management/allitems.jsx';
import AllSupplierPage from './pages/inventory-management/allSupplier.jsx';
import ReportPage from './pages/inventory-management/reportgenerate.jsx';
import RecordPage from './pages/inventory-management/inventoryRecods.jsx';
import AddSupplierpage from './pages/inventory-management/addSupplier.jsx';



import TableReservationHome from './pages/table-res-management/TableReservationHome';
import Contact from './pages/customer-care-management/Contact';
import Feedback from './pages/customer-care-management/Feedback';
import Feedback_form from './pages/customer-care-management/Feedback_form';
import Feedback_history from './pages/customer-care-management/Feedback_history';
import Feedback_approval from './pages/customer-care-management/Feedback_approval';
import Customer_care_manager from './pages/customer-care-management/Customer_care_manager';
// import Feedback_of_services from './pages/customer-care-management/Feedback_of_services';
import FeedbackDataAnalysis from './pages/customer-care-management/FeedbackDataAnalysis';


/** Import middleware */
import { AuthorizeUser } from '../middleware/auth';

import HomeMenu from './pages/menu-management/HomeMenu';
import ItemMenu from './pages/menu-management/ItemMenu';
import TableMenu from './pages/menu-management/tableMenu';
import OrderMenu from './pages/menu-management/OrderMenu.jsx';
import Orders2Menu from './pages/menu-management/Orders2Menu.jsx';
import InventoryMenu from './pages/menu-management/InventoryMenu.jsx';


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
//import PaymentGateway from './pages/order-management/PaymentReceipt.jsx';
import OrderHome from './pages/order-management/OrderHome.jsx';
import OrderCartDisplay from './pages/order-management/OrderCartDisplay.jsx';
import Statistics from './pages/order-management/Statistics.jsx';
import OrderDetails from './pages/order-management/OrderDetails.jsx';
import OrderManager from './pages/order-management/OrderManager.jsx';
import PaymentReceipt from './components/order/Payment.jsx';


import BookingTable from './pages/table-res-management/BookingTable'


function App() {
  return (
    <>

    <main>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
        <Route path="/email" element={<Email/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<AuthorizeUser><Profile/></AuthorizeUser>}></Route>
        <Route path="/reset" element={<AuthorizeUser><Reset/></AuthorizeUser>}></Route>
        <Route path="/recoveryemail" element={<AuthorizeUser><RecoveryEmail/></AuthorizeUser>}></Route>
        <Route path="/newpassword/:token" element={<AuthorizeUser><NewPassword/></AuthorizeUser>}></Route>

        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/alluser" element={<AuthorizeUser><AllUser/></AuthorizeUser>}></Route>

        <Route path="/employeelogin" element={<EmployeeLogin/>}></Route>
        <Route path="/employeedashboard" element={<AuthorizeUser><EmployeeDashboard/></AuthorizeUser>}></Route>

        {/* inventory management */}
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/additem" element={<AddItempage/>}></Route>
        <Route path="/dashboard/allitem" element={<AllitemPage/>}></Route>
        <Route path="/dashboard/allsupplier" element={<AllSupplierPage/>}></Route>
        <Route path="/dashboard/addsupplier" element={<AddSupplierpage/>}></Route>
        <Route path='/dashboard/allitem/report' element={<ReportPage/>}></Route>
        <Route path='/dashboard/allitem/record/:id' element={<RecordPage/>}></Route>

        {/* -------------------------------------------------------------------------- */}

        {/* Table Reservation */}
        <Route path="/reservation" element = {<TableReservationHome/>} ></Route>
        <Route path="/booking" element = {<BookingTable/>} ></Route>



        {/* Customer-care */}
        <Route path="/contact" element={<AuthorizeUser><Contact/></AuthorizeUser>}></Route>
        <Route path="/feedback" element={<AuthorizeUser><Feedback/></AuthorizeUser>}></Route>
        <Route path='/feedback/addFeedback' element={<AuthorizeUser><Feedback_form/></AuthorizeUser>}></Route>
        <Route path='/feedback/getFeedback' element={<AuthorizeUser><Feedback_history/></AuthorizeUser>}></Route>
        <Route path='/manager' element={<AuthorizeUser><Customer_care_manager/></AuthorizeUser>}></Route>
        <Route path='/manager/feedbackApproval' element={<AuthorizeUser><Feedback_approval/></AuthorizeUser>}></Route>
        {/* <Route path='/manager/servicesFeedback' element={<AuthorizeUser></AuthorizeUser>}></Route> */}
        <Route path='/manager/feedbackAnalysis' element={<AuthorizeUser><FeedbackDataAnalysis/></AuthorizeUser>}></Route>

        {/* Menu Management */}
        <Route path="/homeMenu" element={<AuthorizeUser><HomeMenu/></AuthorizeUser>}></Route>
        <Route path="/itemMenu" element={<AuthorizeUser><ItemMenu/></AuthorizeUser>}></Route>
        <Route path='/tableMenu' element={<AuthorizeUser><TableMenu/></AuthorizeUser>}></Route>
        <Route path='/orderMenu' element={<AuthorizeUser><OrderMenu/></AuthorizeUser>}></Route> 
        <Route path='/orders2Menu' element={<AuthorizeUser><Orders2Menu/></AuthorizeUser>}></Route> 
        <Route path='/invenMenu' element={<AuthorizeUser><InventoryMenu/></AuthorizeUser>}></Route>   

        {/* Order Management */}
        <Route path='/orderMenuHome' element={<AuthorizeUser><OrderHome/></AuthorizeUser>}/>
        <Route path='/cart' element={<AuthorizeUser><Cart/></AuthorizeUser>}/>
        <Route path='/orderMenuHome/create' element={<AuthorizeUser><CreatePost/></AuthorizeUser>}/>  
        <Route path='/orderMenuHome/create/posts' element={<AuthorizeUser><Posts/></AuthorizeUser>}/>  
        <Route path='/orderMenuHome/create/posts/payment' element={<AuthorizeUser><PaymentReceipt/></AuthorizeUser>}/>  
        <Route path='/orderDetails' element={<AuthorizeUser><OrderCartDisplay/></AuthorizeUser>}/>
        <Route path='/orderManager/reports' element={<AuthorizeUser><Statistics/></AuthorizeUser>} />
        <Route path='/orderManager/orderUserDetails' element={<AuthorizeUser><OrderDetails/></AuthorizeUser>} />
        <Route path='/orderManager' element={<AuthorizeUser><OrderManager/></AuthorizeUser>}/>
        {/* <Route path='/paymentReceipt' element={<PaymentReceipt />} /> */}


        {/* Catering Management */}
        <Route path="/catMain" element={<AuthorizeUser><CatMain/></AuthorizeUser>}></Route>
        <Route path="/ordercat" element={<AuthorizeUser><OrderCat/></AuthorizeUser>}></Route>
        <Route path="/ordercus" element={<AuthorizeUser><OrderCus/></AuthorizeUser>}></Route>
        <Route path="/orderplace" element={<AuthorizeUser><OrderPlace/></AuthorizeUser>}></Route>
        <Route path="/celOccMenu" element={<AuthorizeUser><CelOccMenu/></AuthorizeUser>}></Route>
        <Route path="/kidMenus" element={<AuthorizeUser><KidMenus/></AuthorizeUser>}></Route>
        <Route path="/orderDetail" element={<AuthorizeUser><OrderDetail/></AuthorizeUser>}></Route>
        <Route path="/seacelMenu" element={<AuthorizeUser><SeacelMenu/></AuthorizeUser>}></Route>
        <Route path="/kidsParty" element={<AuthorizeUser><KidsParty/></AuthorizeUser>}></Route>
        <Route path="/seationCeleb" element={<AuthorizeUser><SeationCeleb/></AuthorizeUser>}></Route>
        <Route path="/wedsMenu" element={<AuthorizeUser><WedsMenu/></AuthorizeUser>}></Route>
        <Route path="/weddings" element={<AuthorizeUser><Weddings/></AuthorizeUser>}></Route>
        <Route path="/updateCat" element={<AuthorizeUser><UpdateCat/></AuthorizeUser>}></Route>
        <Route path="/celebOcc" element={<AuthorizeUser><CelebOcc/></AuthorizeUser>}></Route>
  </Routes>
    </main>
</>
  );
}

export default App;
