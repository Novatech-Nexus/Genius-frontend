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

// inventory---------------------------------------------------
import Dashboard from './pages/inventory-management/dashboard';
import AddItempage from './pages/inventory-management/addinventory';
import AllUser from './pages/user-management/allUser';


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
import UMnavbar from './components/user-management/UMnavbar';


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


//table reservation
import ArchTabble from './pages/table-res-management/ArchTabble.jsx';
import TableReservationHome from './pages/table-res-management/TableReservationHome';
import BookingTable from './pages/table-res-management/BookingTable';

function App() {
  return (
    <>

    <main>
    <Navbar/>
    <UMnavbar/>
    
      <Routes>
        <Route path="/" element={<AuthorizeUser><Home/></AuthorizeUser>}></Route>
        <Route path="/email" element={<Email/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<AuthorizeUser><Profile/></AuthorizeUser>}></Route>
        <Route path="/reset" element={<AuthorizeUser><Reset/></AuthorizeUser>}></Route>
        <Route path="/recovery" element={<AuthorizeUser><Recovery/></AuthorizeUser>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="/alluser" element={<AllUser/>}></Route>

        {/* inventory management */}
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/additem" element={<AddItempage/>}></Route>
        {/* <Route path="/dashboard/allitem" element={<AllitemPage/>}></Route>
        <Route path='/dashboard/allitem/report' element={<ReportPage/>}></Route> */}

        {/* -------------------------------------------------------------------------- */}

        {/* Table Reservation */}
        <Route path="/reservation" element = {<ArchTabble/>} ></Route>
        <Route path="/arch" element = {<TableReservationHome/>} ></Route>
        <Route path="/booking" element = {<BookingTable/>} ></Route>



        {/* Customer-care */}
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path='/feedback/addFeedback' element={<Feedback_form/>}></Route>
        <Route path='/feedback/getFeedback' element={<Feedback_history/>}></Route>
        <Route path='/manager' element={<Customer_care_manager/>}></Route>
        <Route path='/manager/feedbackApproval' element={<Feedback_approval/>}></Route>
        <Route path='/manager/servicesFeedback' element={<Feedback_of_services/>}></Route>
        <Route path='/manager/feedbackAnalysis' element={<FeedbackDataAnalysis/>}></Route>

        {/* Menu Management */}
        <Route path="/homeMenu" element={<AuthorizeUser><HomeMenu/></AuthorizeUser>}></Route>
        <Route path="/itemMenu" element={<AuthorizeUser><ItemMenu/></AuthorizeUser>}></Route>
        <Route path='/tableMenu' element={<AuthorizeUser><TableMenu/></AuthorizeUser>}></Route>
        <Route path="/homeMenu" element={<HomeMenu/>}></Route>
        <Route path="/itemMenu" element={<ItemMenu/>}></Route>
        <Route path='/tableMenu' element={<TableMenu/>}></Route>

        {/* Order Management */}
        <Route path='/orderMenu' element={<OrderHome/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orderMenu/create' element={<CreatePost/>}/>  
        <Route path='/orderMenu/create/posts' element={<Posts/>}/>  
        <Route path='/orderMenu/create/posts/payment' element={<DummyPaymentGateway/>}/>  
        {/* <Route path='/reports' element={<OrderReport/>} />  */}
        


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
