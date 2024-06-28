import React from 'react'
import '../UIFILE/Navbar.css'
import Twitter from "../assets/UI/Twitter.svg"

const Navbar = () => {
  return (
    <>
  
    <div>
      <nav className="navbar navbar-expand-sm">
  <div className="container">
    <a className="navbar-brand text-primary">Chirp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar" >
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >FAQ</a>
        </li>
        <li>
        <button className="btn btn-primary btn-sm" id='navbar-btn' type="button"><span className="badge"><img className='img-fluid' src={Twitter} alt="" /></span>sign in with Twitter</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
    </>
  )
}

export default Navbar
