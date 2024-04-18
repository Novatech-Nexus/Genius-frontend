import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar1() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Staff member</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to=""className="active home-a">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/attendance"className="active home-a">
        <a class="nav-link active" aria-current="page" href="#">mark attendence</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to=""className="active home-a">
        <a class="nav-link active" aria-current="page" href="#">salary details</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to=""className="active home-a">
        <a class="nav-link active" aria-current="page" href="#">profile</a>
        </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   
  )
}

export default Sidebar1
