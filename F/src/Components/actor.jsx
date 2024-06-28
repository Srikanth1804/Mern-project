import React from 'react'
import { useState } from 'react'
const Actor = (props) => {
  let {Name,Image}=props
  let [before,after]=useState("Like")
  let Favorite=()=>{
    after("Liked")
  }
  return (
    <div>
      <h1>{Name}</h1>
      <img src={Image} alt="" /><br />
      <button onClick={Favorite}>{before}</button>
    </div>
  )
}

export default Actor
