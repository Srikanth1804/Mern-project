import React from 'react'
import Userimage1 from "../assets/UI/userAvatar01.svg"
import Userimage2 from "../assets/UI/userAvatar02.svg"
import Userimage3 from "../assets/UI/userAvatar03.svg"
import Twitterblue from "../assets/UI/Twitter (Blue).svg"
import Like from "../assets/UI/Like.svg"
import "../UIFILE/Navbar.css"
const Tagsection = () => {
  return (
    <div>
        <div id='container-fluid' className='mt-5'>
        <div className='container mt-2' >
        <h2>
            What our customers say
        </h2>
        <div className='row mt-5'>
        <div className='col-sm-4'>
        <div className='card mt-2'>
            <div className='card-body'>
                <div className='card-title'>
                   <img src={Userimage1} alt="" className='img-fluid'/>
                    <div className='card-flex'>
                    <div>
                        <h3>Sara May</h3>
                        <p className='card-p'>@sara_may</p>
                    </div>
                    <div className='mt-3'>
                    <span id='Twitter-blue'><img src={Twitterblue} alt="" /></span>  
                    </div>  
                    </div>        
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, illo illum quas impedit autem aut?</p>
                </div>
                <div className='txt-flex'>
                    <span><img src={Like} alt="" />   2</span>
                    <p>March2,2021</p>
                </div>
            </div>
        </div>
        </div>
        <div className='col-sm-4'>
        <div className='card mt-2'>
            <div className='card-body'>
                <div className='card-title'>
                   <img src={Userimage2} alt="" className='img-fluid'/>
                    <div className='card-flex'>
                    <div>
                        <h3>Jack Scott</h3>
                        <p className='card-p'>@jackscott_</p>
                    </div>
                    <div className='mt-3'>
                    <span id='Twitter-blue'><img src={Twitterblue} alt="" /></span>  
                    </div>  
                    </div>        
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem in rerum, quia pariatur atque error, dignissimos odit iusto quibusdam, ea laboriosam quaerat cumque voluptate natus?</p>
                </div>
                <div className='txt-flex'>
                    <span><img src={Like} alt="" />   32</span>
                    <p>March2,2021</p>
                </div>
            </div>
        </div>
        </div>
        <div className='col-sm-4'>
        <div className='card mt-2'>
            <div className='card-body'>
                <div className='card-title'>
                   <img src={Userimage3} alt="" className='img-fluid'/>
                    <div className='card-flex'>
                    <div>
                        <h3>Jessica May</h3>
                        <p className='card-p'>@jmay98</p>
                    </div>
                    <div className='mt-3'>
                    <span id='Twitter-blue'><img src={Twitterblue} alt="" /></span>  
                    </div>  
                    </div>        
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis earum ut dolores fugit corporis?</p>
                </div>
                <div className='txt-flex'>
                    <span><img src={Like} alt="" />   221</span>
                    <p>March2,2021</p>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Tagsection
