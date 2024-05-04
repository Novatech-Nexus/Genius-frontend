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
import OrderMenu from './pages/menu-management/OrderMenu';
import Orders2Menu from './pages/menu-management/Orders2Menu'
import InventoryMenu from './pages/menu-management/InventoryMenu'


function App() {
  return (
    <>

    <main>
    <Navbar/>
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
        <Route path="/homeMenu" element={<HomeMenu/>}></Route>
        <Route path="/itemMenu" element={<ItemMenu/>}></Route>
        <Route path='/tableMenu' element={<TableMenu/>}></Route>
        <Route path='/orderMenu' element={<OrderMenu/>}></Route>
        <Route path='/orders2Menu' element={<Orders2Menu/>}></Route>
        <Route path='/invenMenu' element={<InventoryMenu/>}></Route>        

      </Routes>
      
    </main></> 
  );
}

export default App;
