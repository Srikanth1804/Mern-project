import React from 'react'
import Mobile from "../assets/Project3img/iPhone Mockup.png"
import "../Project3/Project3.css"

const Form1 = () => {
  return (
    <div >
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-sm-6'>
            <div className='card' id='form-card'>
            <div className='card-body'>
                <div className='text-center mt-3'>
                    <h3>Gradie</h3>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div id='mobile'>
                    <img src={Mobile} className='img-fluid mt-5' alt="" />
                </div>
            </div>
        </div>
            </div>
            <div className='col-sm-6'>
            <div className='card'>
            <div className='card-body'>
                <div id='form2'>
            <h1 className='card-title'>Login</h1>
            <div className='mt-3'>
                <div>
                <label htmlFor="form-mail"><h6>Email</h6></label>
                </div>
                <input type="email" id='form-mail' /> 
            </div>
            <div className='mt-3'>
                <div>
                <label htmlFor="form-pwd"><h6>Password</h6></label>
                </div>
                <input type="password" id='form-pwd' /> 
            </div>
            <div className='mt-3'>
                <div>
                <input type="checkbox" id='form-check' />
                <span className='alert me-5'id='form-txt' >By creating an account,you agree to the <a className='alert-link' href="">Terms&Conditions</a></span>
                </div>
            </div>
            <div className='mt-3'>
                <button className='btn' id='form-btn'>Create an Account</button>
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

export default Form1
