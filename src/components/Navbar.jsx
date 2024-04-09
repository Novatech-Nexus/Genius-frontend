import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
// import logo from '../assets/logo.jpg';
import '../components/Navbar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  const location = useLocation();

  return (

    <div>
        {((location.pathname == "/profile")|| (location.pathname == "/recovery") ||(location.pathname == "/") ||(location.pathname == "dashboard") )&&(<nav>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/username'>Login</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/recovery'>Recovery</Link></li> 

            <li><Link to='/dashboard'>Iventory</Link></li>  
            <li><Link to='/reservation'>Table Reservation</Link></li>

            <li><Link to='/homemenu'>Menu</Link></li>  

            
        </nav>)}
    </div>
  );
}

