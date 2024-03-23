import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function Navbar() {

    const location = useLocation();

  return (
    <div>
        {((location.pathname == "/profile")|| (location.pathname == "/recovery"))&&(<nav>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/username'>Login</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/recovery'>Recovery</Link></li>   
        </nav>)}
    </div>
  )
}

