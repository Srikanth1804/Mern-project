import React from 'react'
import Logo from "../assets/Project2img/Logo.svg"
import "../Project2/project2.css"
const Navbar2 = () => {
  return (
    <div>
      <div className='container'>
      <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
    <a className="navbar-brand"><img src={Logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar2">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar2" >
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" >Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Affiliates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Communities</a>
        </li>
        <li>
        <button className="btn btn-sm " id='navbar2-btn' type="button">Join Waitlist</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Navbar2
