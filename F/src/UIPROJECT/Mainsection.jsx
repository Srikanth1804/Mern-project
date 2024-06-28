import React from 'react'
import Article1 from "../assets/Projectimg/Article 1 Image.png"
import Userimg1 from "../assets/Projectimg/User Avatar-1.png"
import Userimg2 from "../assets/Projectimg/User Avatar-2.png"
import Userimg3 from "../assets/Projectimg/User Avatar-3.png"
import "../UIPROJECT/Style.css"

const Mainsection = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5'>
            <div className='col-md-4 mt-5'>
                <div className='card'>
                    <div className="card-body">
                        <img src={Article1} alt="" className='img-fluid'/>
                        <h2>7 Tips for Organic traffic</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia expedita.</p>
                        <img src={Userimg1} alt="" className='img-fluid' id='card-img'/> 
                        <div className='card-txt'>
                            <h4>Spencer David</h4>
                            <p>SEO Specialist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 mt-5'>
                <div className='card'>
                    <div className="card-body">
                        <img src={Article1} alt="" className='img-fluid'/>
                        <h2>How To Start Your Own Business</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia expedita.</p>
                        <img src={Userimg2} alt="" className='img-fluid' id='card-img'/> 
                        <div className='card-txt'>
                            <h4>Sara Frey</h4>
                            <p>Business Leader</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4  mt-5'>
                <div className='card'>
                    <div className="card-body">
                        <img src={Article1} alt="" className='img-fluid'/>
                        <h2>5 Tips for better branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia expedita.</p>
                        <img src={Userimg3} alt="" className='img-fluid' id='card-img'/> 
                        <div className='card-txt'>
                            <h4>David Suns</h4>
                            <p>Brand Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mainsection
