import React from 'react'
import Twitterblack from "../assets/UI/Twitter (Black).svg"
import "../UIFILE/Navbar.css"
const Footerbar = () => {
  return (
    <div>
        <div id='Footer'>
        <div className='container-fluid' id='footerbar'>
        <div className='mt-2'>
        <a class="navbar-brand" href="#">Chirp.</a>
        </div>
        <div id='footeritem'>
        <div id='privacy'>
            <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"><img src={Twitterblack} alt="" />   Privacy Policy</a>
        </li>
      </ul>
        </div>
        <div>
            <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Terms of Use</a>
        </li>
      
      </ul>
        </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Footerbar
