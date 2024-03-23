import {Routes, Route} from 'react-router-dom';

/**Import all routes */
import Home from './components/Home';
import Username from './components/Username';
import Register from './components/Register';
import Profile from './components/Profile';
import Password from './components/Password';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';

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

      </Routes>
      
    </main></> 
  );
}

export default App;
