import React from 'react'
import Products from './demo'
import toner from "../assets/toner.avif"
import moisturizer from "../assets/moisturizer.avif"
import serum from "../assets/serum.avif"
import facewash from "../assets/facewash.avif"

const Product = () => {
    let DATA=[
   {
    Productname:"Toner",
    Productimage:toner
   },
   {
     Productname:"Moisturizer",
   Productimage:moisturizer
   },
   {
     Productname:"Serum",
   Productimage:serum
   },
   {
     Productname:"Facewash",
   Productimage:facewash
   }
    ]
let heading="SkinCare!"

  return (
    <div>
      <Products heading={heading}/>
      <Products Name={DATA[0].Productname} Image={DATA[0].Productimage}/>
      <Products Name={DATA[1].Productname} Image={DATA[1].Productimage}/>
      <Products Name={DATA[2].Productname} Image={DATA[2].Productimage}/>
      <Products Name={DATA[3].Productname} Image={DATA[3].Productimage}/>
    </div>
  )
}

export default Product
