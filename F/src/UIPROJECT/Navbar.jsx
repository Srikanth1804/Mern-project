import React from 'react'
import "../UIPROJECT/Style.css"
import Logo from "../assets/Projectimg/Logo.svg"
const Navbar = () => {
  return (
    <div>
      <div className='container'>
      <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
    <a className="navbar-brand"><img src={Logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar1">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar1" >
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Pricing</a>
        </li>
        <li>
        <button className="btn btn-sm " id='navbar1-btn' type="button">Subscribe</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Navbar
