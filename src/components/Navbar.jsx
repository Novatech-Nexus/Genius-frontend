import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
// import logo from '../assets/logo.jpg';
import '../components/Navbar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  const location = useLocation();

  return (

    <div>
        {((location.pathname == "/recovery") ||(location.pathname == "/") ||(location.pathname == "dashboard") )&&(<nav>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/email'>Login</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/recovery'>Recovery</Link></li> 

            <li><Link to='/dashboard'>Iventory</Link></li>  
            <li><Link to='/reservation'>Table Reservation</Link></li>

            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/feedback'>Feedback</Link></li>
            <li><Link to='/manager'>Customer care manager</Link></li>

            <li><Link to='/homemenu'>Menu</Link></li>  
            
            <li><Link to='/orderMenuHome'>Order</Link></li>
            <li><Link to='/orderManager'>Order Manager</Link></li>

            <li><Link to='/catMain'>Catering</Link></li>
  
        </nav>)}
    </div>
  );
}

