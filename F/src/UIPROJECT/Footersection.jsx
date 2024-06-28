import React from 'react'
import Logo from "../assets/Projectimg/Logo.svg"
import "../UIPROJECT/Style.css"
const Footersection = () => {
  return (
    <div>
      <div className='container mt-5'>
      <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
    <a className="navbar-brand"><img src={Logo} alt="" /></a>
  </div>
  <div className='mt-3'>
    <p id='navbar-foot' >Unifeed @ 2017 All Copyrights Not Reserved</p>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Footersection
