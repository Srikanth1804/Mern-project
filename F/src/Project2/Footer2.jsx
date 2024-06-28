import React from 'react'
import "../Project2/project2.css"
import Atlassian from "../assets/Project2img/Atlassian Icon.svg"
import Behance from "../assets/Project2img/Behance Icon.svg"
import Bitbucket from "../assets/Project2img/Bitbucket Icon.svg"
import Dropbox from "../assets/Project2img/Dropbox Icon.svg"
import Twitch from "../assets/Project2img/Twitch Icon.svg"
import Twitter2 from "../assets/Project2img/Twitter Icon.svg"

const Footer2 = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div>
            <p>Used by these companies:</p>
        </div>
        <div id='footer-2'>
            <img className='img-fluid' src={Atlassian} alt="" />
            <img className='img-fluid' src={Behance} alt="" />
            <img className='img-fluid' src={Bitbucket} alt="" />
            <img className='img-fluid' src={Dropbox} alt="" />
            <img className='img-fluid' src={Twitch} alt="" />
            <img className='img-fluid' src={Twitter2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer2
