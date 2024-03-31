import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
// import logo from '../assets/logo.jpg';
import '../components/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  const location = useLocation();

  return (
    <div className="navbar">
      {/* <img src={logo} alt="logo" className='logo'/>
      <h1>GENIUS RESTAURANT</h1>
      <ul>
        <li>Menu</li>
        <li>Services</li>
        <li>login</li>
        <li>Sign up</li>
      </ul> */}


        {((location.pathname == "/profile")|| (location.pathname == "/recovery") ||(location.pathname == "/") )&&(<nav>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/username'>Login</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/recovery'>Recovery</Link></li>   
        </nav>)}
    </div>
  );
}

