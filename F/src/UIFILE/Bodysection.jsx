import React from 'react'
import Twitter from '../assets/UI/Twitter.svg'
import Image from '../assets/UI/Hero Image (Desktop View).png'
import "../UIFILE/Navbar.css"
const Bodysection = () => {
  return (
    <div>
      <div className='container-fluid'>
    <div className='row  mt-5' id='body'>
        <div className='col-sm-6 mt-3' id='body-txt'>
        <h1>Twitter analytics taken to a whole new level</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ad? Placeat labore vero rerum doloremque neque assumenda. Facere asperiores, magni voluptatem obcaecati, unde omnis quas ea ad, esse quibusdam earum.</p>
        <button className="btn btn-primary" type="button"><span className="badge"><img className='img-fluid' src={Twitter} alt="" id='btn' /></span>sign in with Twitter</button><span id='arrowbtn'>Learn more</span>
        <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil excepturi molestias eaque, debitis quam?</p>
        </div>
        <div className='col-sm-4 mt-3'>
            <img className='img-fluid' src={Image} alt="" id='body-img' />
        </div>
    </div>
    
</div>
    </div>
  )
}

export default Bodysection
