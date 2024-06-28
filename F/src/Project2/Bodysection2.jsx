import React from 'react'
import "../Project2/project2.css"
import Illustration from "../assets/Project2img/Illustration.png"
const Bodysection2 = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-4'>
            <div className='col-sm-6 mt-5'>
            <div id='alert'>
 We are now allowing early-access for users <a href="#" class="alert-link">Learn more.</a>
</div>
<div>
<h1 className='mt-3'>Build a highly engaged community with no effort.</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum non similique odit rerum sint nesciunt exercitationem vel ex quas est quia repudiandae porro adipisci pariatur quod, hic quae officiis nihil?</p>
<form>
    <input type="email" placeholder='Enter your e-mail address' id='e-mail' />
    <button id='btn2'>Join Waitlist</button>
</form>
</div>
            </div>
            <div className='col-sm-6'>
                <img src={Illustration} className='img-fluid mt-4' alt="" id='img-2' />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Bodysection2
