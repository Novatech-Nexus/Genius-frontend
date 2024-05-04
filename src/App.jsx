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
import DummyPaymentGateway from './components/order/Payment.jsx';
//import OrderReport from './components/order/'
import OrderHome from './pages/order-management/OrderHome.jsx';

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
        <Route path="/reset" element={<Reset/>}></Route>
        <Route path="/recoveryemail" element={<RecoveryEmail/>}></Route>
        <Route path="/newpassword/:token" element={<NewPassword/>}></Route>

        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/alluser" element={<AllUser/>}></Route>

        <Route path="/employeelogin" element={<EmployeeLogin/>}></Route>
        <Route path="/employeedashboard" element={<EmployeeDashboard/>}></Route>

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
        <Route path="/homeMenu" element={<HomeMenu/>}></Route>
        <Route path="/itemMenu" element={<ItemMenu/>}></Route>
        <Route path='/tableMenu' element={<TableMenu/>}></Route>
        <Route path='/orderMenu' element={<OrderMenu/>}></Route> 
        <Route path='/orders2Menu' element={<Orders2Menu/>}></Route> 
        <Route path='/invenMenu' element={<InventoryMenu/>}></Route>   

        {/* Order Management */}
        <Route path='/orderMenu' element={<OrderHome/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orderMenu/create' element={<CreatePost/>}/>  
        <Route path='/orderMenu/create/posts' element={<Posts/>}/>  
        <Route path='/orderMenu/create/posts/payment' element={<DummyPaymentGateway/>}/>  
        {/* <Route path='/reports' element={<OrderReport/>} />  */}
        


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
