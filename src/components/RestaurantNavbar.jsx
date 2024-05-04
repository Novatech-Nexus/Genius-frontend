import geniuslogo from '../assets/inventory-images/geniuslogo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function RestaurantNavbar(){
    return(
        <div className="bg-body-tertiary" style={{ zIndex: 1000 }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={geniuslogo} className="d-inline-block align-text-top" alt="Logo" style={{ height: "75px",width:"75px", marginRight: "10px" }} />
                        <div className="ms-4" style={{fontSize:"30px",color:"white",fontFamily:"inherit",fontWeight:"bold"}}>GENIUS RESTAURANT</div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Link1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Link 3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default RestaurantNavbar;
