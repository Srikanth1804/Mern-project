import React from 'react'
import Tick from "../assets/UI/Checkmark.svg"
import Twitter from "../assets/UI/Twitter.svg"
import "../UIFILE/Navbar.css"
const Footersection = () => {
  return (
    <div>
        <div id='footer'>
        <div className='container-fluid mt-5'>
        <div>
            <h1>One simple price plan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum!</p>
        </div>
        <div>
            <div className='card mt-5' id='footer-card'>
                <div className='card-body'>
                    <div className='card-header'>
                        <p>Monthly</p>
                        <span><b>$9</b><small>/mo</small></span>
                    </div>
                    <div>
                        <p><img src={Tick} alt="" />Lorem ipsum dolor sit amet.</p>
                        <p><img src={Tick} alt="" />Lorem ipsum dolor sit amet consectetur .</p>
                        <p><img src={Tick} alt="" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quam.</p>
                    </div>
                    <div className='card-footer'>
                        <button id='footer-btn' className='btn btn-primary'><img src={Twitter} alt="" />Start Trial with Twitter</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </div>

    </div>
  )
}

export default Footersection
