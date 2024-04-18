// import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Sidebar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
  <div className="container-fluid">
    <h1 className="navbar-brand mb-0" style={{ fontSize: '24px' }}> {/* Adjust the font size as needed */}
      <img src="" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
      Genius Restaurant
    </h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-white px-3" aria-current="page" href="#">Menu</a>
        </li>
        <li className="nav-item dropdown"> {/* Changed to dropdown */}
          <a className="nav-link dropdown-toggle text-white px-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Service 1</a></li>
            <li><a className="dropdown-item" href="#">Service 2</a></li>
            <li><a className="dropdown-item" href="#">Service 3</a></li>
            {/* Add more dropdown items as needed */}
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white px-3" aria-current="page" href="#">Contact us</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-outline-light me-3 border-0" type="button" style={{ backgroundColor: '#FFC720', textShadow: '1px 1px 2px #333' }}>Login</button>
        </li>
      </ul>
    </div>
  </div>
</nav>




  )


}

export default Sidebar