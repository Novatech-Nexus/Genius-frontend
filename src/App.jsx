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

// inventory---------------------------------------------------
import Dashboard from './pages/inventory-management/dashboard';
import AddItempage from './pages/inventory-management/addinventory';
import AllitemPage from './pages/inventory-management/allitems';
import ReportPage from './pages/inventory-management/reportgenerate';


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


        {/* inventory management */}
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dashboard/additem" element={<AddItempage/>}></Route>
        <Route path="/dashboard/allitem" element={<AllitemPage/>}></Route>
        <Route path='/dashboard/allitem/report' element={<ReportPage/>}></Route>

        {/* -------------------------------------------------------------------------- */}

      </Routes>
      
    </main></> 
  );
}

export default App;
