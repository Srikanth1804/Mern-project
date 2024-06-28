import React from 'react'
import Patty from "../assets/patty.jpg"

import { useState } from 'react'


export const Demo = () => {

let [A,A1] = useState("hi")
let Sc = ()=>{
  A1("Hello")
}




  return (
    <div>
      <h1>{A}</h1>
      <button onClick={Sc}>c</button>
      <h1>WELCOME TO THE REACT!</h1>
      
    </div>
  )
}


export const Demo1 = () => {
  let Name = "Patcummins"
  return (
    <div>
      <h1>{Name}</h1>
      <img src={Patty} alt="" srcSet="" height="200px"/>
      
      <img src="https://images.indianexpress.com/2023/10/Pat-Cummins-1.jpg" alt="" srcSet="" height="200px"/>
      
    </div>
  )
}





