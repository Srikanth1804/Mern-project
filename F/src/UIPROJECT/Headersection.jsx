import React from 'react'
import Mainarticle from "../assets/Projectimg/Main Article Image.png"
import Userimg from "../assets/Projectimg/User Avatar.png"
import "../UIPROJECT/Style.css"
const Headersection = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
        <div className='col-md-4 mt-5'>
            <img className='img-fluid' src={Mainarticle} alt="" />
        </div>
        <div className='col-md-7 mt-5' id='headercontent'>
            <h1>Lorem ipsum: dolor sit amet consectetur</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum alias consequatur modi. Sapiente in, enim exercitationem impedit itaque, inventore iure.</p>
            <img src={Userimg} alt="" className='img-fluid' id='headerimg1' />
            <div id='header-title'>
                <h4>Jessica Andrews</h4>
                <p>Content Manager</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Headersection
