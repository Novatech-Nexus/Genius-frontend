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
import Contact from './pages/customer-care-management/Contact';
import Feedback from './pages/customer-care-management/Feedback';
import Feedback_form from './pages/customer-care-management/Feedback_form';
import Feedback_history from './pages/customer-care-management/Feedback_history';



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

        {/* Customer-care */}
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path='/feedback/addFeedback' element={<Feedback_form/>}></Route>
        <Route path='/feedback/getFeedback' element={<Feedback_history/>}></Route>

      </Routes>
      
    </main></> 
  );
}

export default App;
