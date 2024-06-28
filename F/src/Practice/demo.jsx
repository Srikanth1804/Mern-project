import React from 'react'
import { useState } from 'react'

const Products = (props) => {
    let {Name,Image,heading}=props

    let [Btn,Btn1]=useState("Add to cart")
    let Cart=()=>{
      Btn1("Added")
    }


   return (
  
    <div>
      <h1>{heading}</h1>
      <h3>{Name}</h3>
      <img src={Image} alt="" width={200} />
      <button onClick={Cart}>{Btn}</button>
    </div>
   
  )
}

export default Products
